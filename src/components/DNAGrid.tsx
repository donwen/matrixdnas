import { useState, useEffect } from 'react';
import { fetchDNAAttributes, DNAAttribute, FetchDNAAttributesResult } from '../lib/api';
import WorldTabs from './WorldTabs';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import { DNAEditModal } from './DNAEditModal';
import * as Icons from 'lucide-react';

interface DNAGridProps {
  initialWorld?: string;
}

export function DNAGrid({ initialWorld = 'physical' }: DNAGridProps) {
  const [selectedWorld, setSelectedWorld] = useState(initialWorld);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dnaResult, setDnaResult] = useState<FetchDNAAttributesResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDna, setSelectedDna] = useState<DNAAttribute | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // 获取分类列表
  const categories = dnaResult?.data
    ? Array.from(new Set(dnaResult.data.map(item => item.category)))
    : [];

  // 加载DNA属性数据
  useEffect(() => {
    async function loadDNAAttributes() {
      setLoading(true);
      setError(null);
      
      try {
        const result = await fetchDNAAttributes({
          world: selectedWorld,
          category: selectedCategory,
          search: searchQuery,
          page: 1,
          perPage: 1000 // 设置一个较大的数值以获取所有数据
        });
        
        setDnaResult(result);
      } catch (err) {
        console.error('加载DNA属性失败:', err);
        setError(err instanceof Error ? err.message : '未知错误');
      } finally {
        setLoading(false);
      }
    }
    
    loadDNAAttributes();
  }, [selectedWorld, selectedCategory, searchQuery]);

  // 处理世界切换
  const handleWorldChange = (world: string) => {
    setSelectedWorld(world);
    setSelectedCategory('All');
  };

  // 处理分类切换
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  // 处理搜索
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // 处理卡片点击
  const handleCardClick = (dna: DNAAttribute) => {
    setSelectedDna(dna);
    setIsEditModalOpen(true);
  };

  // 处理保存编辑
  const handleSaveDna = (updatedDna: DNAAttribute) => {
    // 在實際應用中，這裡應該調用API將更新後的數據保存到後端
    console.log('保存更新的DNA屬性:', updatedDna);
    
    // 更新本地數據
    if (dnaResult && dnaResult.data) {
      const updatedData = dnaResult.data.map(item => 
        item.id === updatedDna.id ? updatedDna : item
      );
      
      setDnaResult({
        ...dnaResult,
        data: updatedData
      });
    }
  };

  // 获取图标组件
  const getIconComponent = (iconName: string | undefined) => {
    if (!iconName) return Icons.File;
    return (Icons as any)[iconName] || Icons.File;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <WorldTabs 
        selectedWorld={selectedWorld} 
        onSelectWorld={handleWorldChange} 
      />
      
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full md:w-64">
          <CategoryFilter 
            categories={['All', ...categories]} 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>
        
        <div className="flex-1">
          <SearchBar 
            onSearch={handleSearch} 
            placeholder="搜索DNA属性..."
          />
          
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4">
              <p>{error}</p>
            </div>
          )}
          
          {!loading && !error && dnaResult && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {dnaResult.data.map((dna: DNAAttribute) => {
                const IconComponent = getIconComponent(dna.icon);
                return (
                  <div 
                    key={dna.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow relative group bg-white dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                        <IconComponent className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 
                          className="text-lg font-medium text-gray-900 dark:text-gray-100 cursor-pointer" 
                          onClick={() => handleCardClick(dna)}
                        >
                          {dna.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {dna.category}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {`{${dna.id}}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{dna.definition}</p>
                    
                    {/* 编辑按钮 */}
                    <button
                      onClick={() => handleCardClick(dna)}
                      className="absolute top-2 right-2 bg-indigo-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 hover:bg-indigo-700 transition-opacity"
                      title="编辑卡片"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    
                    {/* 整个卡片可点击 */}
                    <div 
                      className="absolute inset-0 cursor-pointer z-0" 
                      onClick={() => handleCardClick(dna)}
                    ></div>
                  </div>
                );
              })}
            </div>
          )}
          
          {!loading && !error && dnaResult && dnaResult.data.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">没有找到匹配的DNA属性</p>
            </div>
          )}
        </div>
      </div>

      {/* 编辑模态框 */}
      <DNAEditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        dna={selectedDna}
        onSave={handleSaveDna}
      />
    </div>
  );
}