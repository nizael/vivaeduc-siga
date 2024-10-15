'use client'
import React, { useState, useEffect, useRef, useMemo } from 'react'
import { DropdownIcon } from '../icons/DropdownIcon'

interface ISelectProps {
  options: { label: string, value: string }[]
  initialValue?: { label: string, value: string }
  onChange?(evt: React.ChangeEvent<HTMLInputElement>): void
  label?: string
  name?: string
  id?: string
  disabled?: boolean
  required?: boolean
  placeholder?: string
  className?: string
}

export const CustomSelect = ({
  options,
  initialValue,
  onChange,
  label,
  name,
  disabled,
  required,
  placeholder,
  className = '',
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOption, setSelectedOption] = useState(initialValue)
  const [highlightedIndex, setHighlightedIndex] = useState(0)
  const listRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (initialValue) setSelectedOption(initialValue)
  }, [initialValue])

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const filteredOptions = useMemo(
    () =>
      options?.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [options, searchTerm]
  )

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>
  ) => {
    switch (e.key) {
      case 'ArrowDown':
        setHighlightedIndex((prevIndex) =>
          Math.min(prevIndex + 1, filteredOptions.length - 1)
        )
        break
      case 'ArrowUp':
        setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0))
        break
      case 'Enter':
        e.preventDefault()
        if (isOpen) {
          handleSelect(filteredOptions[highlightedIndex])
        }
        break
      case 'Escape':
        setIsOpen(false)
        break
      default:
        break
    }
  }

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSelect = (option: { label: string; value: string }) => {
    setSelectedOption(option)
    setSearchTerm('')
    setTimeout(() => {
      setIsOpen(false)
    }, 100)

    if (onChange && inputRef.current) {
      const event = new Event('input', { bubbles: true }) as unknown as React.ChangeEvent<HTMLInputElement>
      inputRef.current.value = option.value
      Object.defineProperty(event, 'currentTarget', {
        value: inputRef.current,
        writable: false
      })
      onChange(event)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target instanceof HTMLElement) {
        if (!dropdownRef.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  useEffect(() => {
    if (isOpen && listRef.current) {
      listRef.current.focus()
    }
  }, [isOpen])

  const resetSelect = () => {
    setSelectedOption(undefined)
    setSearchTerm('')
  }

  useEffect(() => {
    const currentForm = dropdownRef.current?.closest('form') as HTMLFormElement
    formRef.current = currentForm

    if (currentForm) {
      const handleReset = () => resetSelect()
      currentForm.addEventListener('reset', handleReset)
      return () => {
        currentForm.removeEventListener('reset', handleReset)
      }
    }
  }, [])

  return (
    <label className={`flex flex-col gap-1 justify-between ${className}`} >
      {label && <span>{label}</span>}
      <div className="relative h-[42px] w-full" ref={dropdownRef}>
        <input
          type="text"
          tabIndex={-1}
          required={required}
          value={selectedOption?.value || ''}
          name={name}
          onChange={onChange}
          className="-z-10 opacity-0 absolute outline-none pointer-events-none"
          ref={inputRef}
        />
        <button
          type="button"
          disabled={disabled}
          onClick={toggleDropdown}
          className={`${disabled ? 'bg-gray-200' : 'bg-gray-50'
            } flex justify-between w-full border border-gray-300 rounded-lg px-1 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500`}
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          {selectedOption ? (
            <span className="text-gray-700">{selectedOption.label}</span>
          ) : (
            <span className="text-gray-500 text-nowrap overflow-hidden">
              {placeholder}
            </span>
          )}
          <DropdownIcon />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
            <input
              type="text"
              ref={listRef}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar..."
              className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none"
              role="combobox"
              aria-controls="dropdown-options"
              aria-expanded={isOpen}
              onKeyDown={handleKeyDown}
            />

            <ul
              className="max-h-48 overflow-y-auto"
              role="listbox"
              id="dropdown-options"
            >
              {filteredOptions?.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={option.value}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${index === highlightedIndex ? 'bg-blue-200' : ''
                      }`}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    aria-selected={index === highlightedIndex}
                    role="option"
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500">
                  Nenhuma opção encontrada
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </label>
  )
}
