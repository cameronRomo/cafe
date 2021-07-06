import _ from 'lodash';

export const paginate = (pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;

  return _()
    .slice(startIndex)
    .take(pageSize)
    .value();
}