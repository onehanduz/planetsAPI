const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;

function getPagination(params) {
  const page = Math.abs(params.page) || DEFAULT_PAGE_NUMBE;
  const limit = Math.abs(params.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  return {
    skip,
    limit,
  };
}

module.exports = { getPagination };
