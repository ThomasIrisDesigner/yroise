import { typography } from '@/styles/typography'

interface TranscriptionDisclosureProps {
  text: string
}

/**
 * Tiroir « Retranscription » — discret, uniquement pour l'accessibilité.
 * Utilise l'élément natif <details>/<summary> (pas de JS requis).
 */
export function TranscriptionDisclosure({ text }: TranscriptionDisclosureProps) {
  return (
    <details className="transcription-disclosure group">
      <summary className="transcription-disclosure-trigger">
        <span className="transcription-disclosure-label">Retranscription</span>
        <svg
          className="transcription-disclosure-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
        >
          <path
            d="M2 4.5L6 8L10 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="transcription-disclosure-body">
        <p className={typography.editorialBody}>{text}</p>
      </div>
    </details>
  )
}
