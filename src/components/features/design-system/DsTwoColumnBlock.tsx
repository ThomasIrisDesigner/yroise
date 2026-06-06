import * as React from 'react'

import { cn } from '@/lib/utils'

export type CompactSpecRow = {
  token: string
  value: string
}

export function CompactSpecsTable({ rows }: { rows: readonly CompactSpecRow[] }) {
  return (
    <div className="rounded-lg border border-border p-4">
      <dl className="grid gap-1.5 font-outfit text-[11px]">
        {rows.map((row) => (
          <div
            key={row.token}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] items-baseline gap-x-4"
          >
            <dt className="font-mono text-text">{row.token}</dt>
            <dd className="text-muted">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function isCompactSpecRows(value: unknown): value is readonly CompactSpecRow[] {
  return (
    Array.isArray(value) &&
    (value.length === 0 ||
      (typeof value[0] === 'object' &&
        value[0] !== null &&
        'token' in value[0] &&
        'value' in value[0]))
  )
}

interface DsTwoColumnBlockProps {
  title?: string
  preview: React.ReactNode
  specs: readonly CompactSpecRow[] | React.ReactNode
  note?: string
  previewClassName?: string
}

/** Aperçu ~40 % · specs ~60 % */
export function DsTwoColumnBlock({
  title,
  preview,
  specs,
  note,
  previewClassName,
}: DsTwoColumnBlockProps) {
  return (
    <div>
      {title ? (
        <h3 className="mb-4 font-outfit text-xs font-semibold uppercase tracking-[0.08em] text-text">
          {title}
        </h3>
      ) : null}
      <div className="grid items-start gap-6 md:grid-cols-[2fr_3fr]">
        <div
          className={cn(
            'min-w-0 rounded-lg border border-border bg-background p-4',
            previewClassName
          )}
        >
          {preview}
        </div>
        <div className="min-w-0">
          {isCompactSpecRows(specs) ? <CompactSpecsTable rows={specs} /> : specs}
          {note ? (
            <p className="mt-2 font-outfit text-[11px] leading-snug text-muted">{note}</p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
