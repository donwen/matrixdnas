import { DNAAttribute } from '../lib/api'
import { dnaData } from './dnaData'

// 擴展DNAAttribute接口的數據結構，添加icon和color屬性
export interface CompleteDNAAttribute extends DNAAttribute {
  description: string
  icon: string  // 修改為字符串類型
  color: string
}

// 將dnaData轉換為CompleteData格式
export const completeData: CompleteDNAAttribute[] = dnaData.map(item => ({
  ...item,
  description: item.definition,
  icon: 'File',  // 使用默認圖標名稱
  color: '#6366F1'
}))