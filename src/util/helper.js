// 生成唯一id
export function generateId()
{
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

// 筛选附和条件的结果
export function filterlist(list, status) {
  return list.filter(item => {
    switch (status) {
      case 'active':
        return !item.completed;
      case 'completed':
        return item.completed;
      default:
        return true;
    }
  });
}

