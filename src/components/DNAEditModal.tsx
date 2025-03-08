import { useState, useEffect } from 'react';
import { DNAAttribute } from '../lib/api';
import * as Icons from 'lucide-react';

interface DNAEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  dna: DNAAttribute | null;
  onSave: (updatedDna: DNAAttribute) => void;
}

export function DNAEditModal({ isOpen, onClose, dna, onSave }: DNAEditModalProps) {
  const [editedDna, setEditedDna] = useState<DNAAttribute | null>(dna);
  const [algorithm, setAlgorithm] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [variables, setVariables] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [showIconSelector, setShowIconSelector] = useState(false);

  // 當dna屬性變化時更新本地狀態
  useEffect(() => {
    if (dna) {
      setEditedDna(dna);
      // 這裡假設這些字段會從後端獲取，目前先使用空值
      setAlgorithm('');
      setTags('');
      setVariables('');
      setSelectedIcon(dna.icon || 'Activity'); // 設置默認圖標
    }
  }, [dna]);

  if (!isOpen || !editedDna) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedDna(prev => prev ? { ...prev, [name]: value } : null);
  };

  const handleSave = () => {
    if (editedDna) {
      // 將algorithm、tags和variables也保存到editedDna中
      const updatedDna = {
        ...editedDna,
        // 這些字段不是DNAAttribute的一部分，但我們可以在這裡添加它們
        // 如果後端API需要這些字段，可以在這裡處理
        _algorithm: algorithm,
        _tags: tags,
        _variables: variables,
        icon: selectedIcon
      };
      onSave(updatedDna);
      onClose();
    }
  };

  // 創建一個圖標列表數組，從lucide-react導入
  const iconList = Object.keys(Icons).filter(
    key => typeof (Icons as any)[key] === 'function' && key !== 'createLucideIcon'
  );

  // 獲取當前選擇的圖標組件
  const IconComponent = (Icons as any)[selectedIcon] || Icons.Activity;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">編輯卡片</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* ID顯示 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ID</label>
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded text-gray-800 dark:text-gray-200">
                  {editedDna.id}
                </div>
              </div>

              {/* 標題編輯 */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">標題</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editedDna.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* 定義編輯 */}
              <div>
                <label htmlFor="definition" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">定義</label>
                <textarea
                  id="definition"
                  name="definition"
                  value={editedDna.definition}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* 標籤編輯 */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">標籤</label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="標籤1, 標籤2, 標籤3..."
                />
              </div>

              {/* 變量編輯 */}
              <div>
                <label htmlFor="variables" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">變量</label>
                <textarea
                  id="variables"
                  name="variables"
                  value={variables}
                  onChange={(e) => setVariables(e.target.value)}
                  rows={3}
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  placeholder="變量名=值, 變量名=值..."
                />
              </div>

              {/* 圖標選擇 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">圖標</label>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowIconSelector(!showIconSelector)}
                    className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    選擇圖標
                  </button>
                </div>
                
                {/* 圖標選擇器 */}
                {showIconSelector && (
                  <div className="mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 max-h-60 overflow-y-auto grid grid-cols-6 gap-2">
                    {iconList.map((iconName) => {
                      const Icon = (Icons as any)[iconName];
                      return (
                        <div
                          key={iconName}
                          onClick={() => {
                            setSelectedIcon(iconName);
                            setShowIconSelector(false);
                          }}
                          className={`cursor-pointer p-2 rounded-md flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 ${
                            selectedIcon === iconName ? 'bg-indigo-100 dark:bg-indigo-900' : ''
                          }`}
                          title={iconName}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {/* 算法編輯 - 代碼區域 */}
              <div>
                <label htmlFor="algorithm" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">計算方法</label>
                <div className="border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 text-xs font-mono">
                    <textarea
                      id="algorithm"
                      name="algorithm"
                      value={algorithm}
                      onChange={(e) => setAlgorithm(e.target.value)}
                      rows={15}
                      className="w-full p-2 bg-gray-100 dark:bg-gray-700 border-0 focus:ring-0 font-mono text-sm text-gray-800 dark:text-gray-200"
                      placeholder="// 在這裡編寫算法代碼
function calculate(inputs) {
  // 實現您的計算邏輯
  return {
    value: 0,
    confidence: 1
  };
}"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              取消
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              保存
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}