// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './TransactionCell'
import type { FIND_TRANSACTION_BY_ID, FIND_TRANSACTION_BY_IDVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './TransactionCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FIND_TRANSACTION_BY_ID | 'updating'
> & FIND_TRANSACTION_BY_IDVariables

export default function (props: CellInputs): ReturnType<SuccessType>
