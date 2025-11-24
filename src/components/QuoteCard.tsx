import type { ReactNode } from 'react'
import QuoteIcon from './QuoteIcon'

export type QuoteCardProps = {
  quote: string
  author?: string
  role?: string
  avatarUrl?: string
  quoteIcon?: ReactNode
}

export default function QuoteCard({ quote, author, role, avatarUrl, quoteIcon }: QuoteCardProps) {
  return (
    <figure className="quote-card">
      {quoteIcon ?? <QuoteIcon />}
      <blockquote>
        <p>{quote}</p>
        {(author || role) && (
          <footer className="quote-attribution">
            {avatarUrl && (
              <img
                className="quote-avatar"
                src={avatarUrl}
                alt={author ? `Portrait of ${author}` : 'Quote avatar'}
              />
            )}
            <div className="quote-attribution-info">
              {author && <span className="name">{author}</span>}
              {role && <span className="title">{role}</span>}
            </div>
          </footer>
        )}
      </blockquote>
    </figure>
  )
}