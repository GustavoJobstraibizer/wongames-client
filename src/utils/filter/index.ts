import { ItemProps } from 'components/ExploreSidebar'
import { ParsedUrlQueryInput } from 'querystring'

type ParseArgs = {
  queryString: ParsedUrlQueryInput
  filterItems?: Pick<ItemProps, 'type' | 'name'>[]
}

export const parseQueryStringToWhere = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((i) => i.name === key)

      obj[key] = !isCheckbox(item)
        ? queryString[key]
        : { name_contains: queryString[key] }
    })

  return obj
}

export const parseQueryStringToFilter = ({
  queryString,
  filterItems
}: ParseArgs) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const obj: any = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((i) => i.name === key)
    const isArray = Array.isArray(queryString[key])

    obj[key] =
      !isArray && isCheckbox(item) ? [queryString[key]] : queryString[key]
  })

  return obj
}

const isCheckbox = (
  item: Pick<ItemProps, 'type' | 'name'> | undefined
): boolean => {
  return item?.type === 'checkbox'
}
