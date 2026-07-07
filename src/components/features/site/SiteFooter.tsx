import { Link } from 'react-router-dom'

import { PageContainer } from '@/components/features/site/PageContainer'
import {
  FOOTER_ANNEX_LINKS,
  FOOTER_INTRO,
  FOOTER_PARTNER_LOGOS,
  FOOTER_SOCIAL_LINKS,
  FOOTER_STATS,
} from '@/data/footer'
import { cn } from '@/lib/utils'
import { typography } from '@/styles/typography'

function FooterDotSeparator() {
  return (
    <div className="site-footer-separator flex w-full items-center justify-center" aria-hidden>
      <span className="size-[5px] rounded-full bg-glaz-500" />
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer text-on-dark">
      <div className="site-footer-main bg-ocean-900 px-section py-10">
        <PageContainer className="site-footer-container flex flex-col gap-8 !px-0">
          <img
            src="/images/logo_yroise-blanc.svg"
            alt="YROISE"
            width={120}
            height={24}
            className="site-footer-logo block h-6 w-[120px]"
            draggable={false}
          />

          <div className="site-footer-content flex flex-col gap-8">
            <p className="site-footer-intro text-center font-outfit text-sm font-normal leading-[1.55] text-on-dark">
              {FOOTER_INTRO}
            </p>

            <div className="site-footer-stats-row flex gap-4 px-4">
              {FOOTER_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-w-0 flex-1 flex-col items-center gap-1 text-center"
                >
                  <p className="font-outfit text-xl font-bold leading-normal text-on-dark">
                    {stat.value}
                  </p>
                  <p className={cn(typography.meta, 'text-on-dark')}>{stat.label}</p>
                </div>
              ))}
            </div>

            <FooterDotSeparator />

            <div className="site-footer-social flex flex-col items-center gap-4 px-4">
              <p className={cn(typography.meta, 'w-full text-center text-on-dark')}>
                Suivre la médiathèque de Brest
              </p>
              <div className="flex items-center gap-8">
                {FOOTER_SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="inline-flex size-6 items-center justify-center"
                  >
                    <img
                      src={social.iconSrc}
                      alt=""
                      aria-hidden
                      className="size-6"
                      draggable={false}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterDotSeparator />

          <div className="site-footer-legal flex flex-col items-center gap-4">
            <p className={cn(typography.meta, 'site-footer-legal-title w-full text-center text-on-dark')}>
              Pages annexes
            </p>
            <nav
              className="site-footer-legal-nav flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
              aria-label="Pages annexes"
            >
              {FOOTER_ANNEX_LINKS.map((link) => (
                <Link
                  key={link.slug}
                  to={link.slug}
                  className={cn(
                    typography.uiLink,
                    'text-on-dark/70 transition-colors hover:text-on-dark'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </PageContainer>
      </div>

      <div className="site-footer-partners flex items-center justify-center gap-8 bg-background px-6 py-10">
        {FOOTER_PARTNER_LOGOS.map((partner) => (
          <img
            key={partner.label}
            src={partner.src}
            alt={partner.label}
            className={cn('block shrink-0', partner.className)}
            draggable={false}
          />
        ))}
      </div>
    </footer>
  )
}
