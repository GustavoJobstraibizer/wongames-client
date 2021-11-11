import { Close, FilterList } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import xor from 'lodash.xor'
import { ParsedUrlQueryInput } from 'querystring'
import { useEffect, useState } from 'react'
import * as S from './styles'

export type ItemProps = {
  title: string
  name: string
  type: 'checkbox' | 'radio'
  fields: Field[]
}

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  onFilter,
  initialValues = {}
}: ExploreSidebarProps) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (name: string, value: boolean | string) => {
    setValues({ ...values, [name]: value })
  }

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || []
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>

      <S.Content>
        {items?.map(({ title, name: fieldName, type, fields }) => (
          <S.Items key={title} data-cy={title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {title}
            </Heading>

            {type === 'checkbox' &&
              fields?.map(({ label, name }) => (
                <Checkbox
                  key={name}
                  name={name}
                  label={label}
                  labelFor={name}
                  isChecked={(values[fieldName] as string[])?.includes(name)}
                  onCheck={() => handleCheckbox(fieldName, name)}
                />
              ))}

            {type === 'radio' &&
              fields?.map(({ label, name }) => (
                <Radio
                  id={name}
                  key={name}
                  name={fieldName}
                  label={label}
                  labelFor={name}
                  value={name}
                  defaultChecked={String(name) === String(values[fieldName])}
                  onChange={() => handleRadio(fieldName, name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

export default ExploreSidebar
