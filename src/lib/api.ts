import { completeData } from '../data/dnaComplete';
import { dnaData } from '../data/dnaData';

export interface DNAAttribute {
  id: string
  world: string
  category: string
  name: string
  definition: string
  icon?: string
}

export interface FetchDNAAttributesParams {
  world?: string;
  category?: string;
  search?: string;
  page?: number;
  perPage?: number;
}

export interface FetchDNAAttributesResult {
  data: DNAAttribute[];
  total: number;
  page: number;
  perPage: number;
}

export async function fetchDNAAttributes(params: FetchDNAAttributesParams = {}) {
  const {
    world = 'physical',
    category = 'All',
    search = '',
    page = 1,
    perPage = 30
  } = params

  try {
    // 過濾數據
    let filteredData = completeData
    
    // 如果數據為空或長度為0，使用備用數據
    if (!filteredData || filteredData.length === 0) {
      console.log('使用備用數據源 dnaData')
      filteredData = dnaData.map(item => ({
        ...item,
        id: item.id,
        description: item.definition,
        icon: 'File', // 使用默認圖標名稱
        color: '#6366F1'
      }))
    }
    
    // 進行過濾
    filteredData = filteredData.filter(item => {
      // 世界過濾
      if (item.world !== world) return false
      
      // 分類過濾
      if (category !== 'All' && item.category !== category) return false
      
      // 搜索過濾
      if (search) {
        const searchLower = search.toLowerCase()
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.definition.toLowerCase().includes(searchLower)
        )
      }
      
      return true
    })

    // 計算分頁
    const total = filteredData.length
    const start = (page - 1) * perPage
    const end = start + perPage
    const data = filteredData.slice(start, end)

    return {
      data,
      total,
      page,
      perPage
    }
  } catch (error) {
    console.error('DNA屬性查詢失敗:', error)
    const errorMessage = error instanceof Error ? error.message : '未知錯誤'
    throw new Error(`獲取DNA屬性失敗: ${errorMessage}。請刷新頁面或稍後重試。`)
  }
}