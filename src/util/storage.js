const LOCAL_STORAGE_KEY = 'todos';
/**
 * 获取目前所有的任务
 */
export function fetch() {
  const results = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(results) {
    return JSON.parse(results);
  }
  return [];
}
/**
 * 保存所有任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}