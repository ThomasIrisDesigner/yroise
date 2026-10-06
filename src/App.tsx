import { Navigate, Route, Routes } from 'react-router-dom'

import { PrototypeLayout } from '@/components/features/PrototypeLayout'
import { INSTITUTIONAL_PAGE_SLUGS } from '@/data/institutionalPages'
import { Arborescence } from '@/pages/Arborescence'
import { Carte } from '@/pages/Carte'
import { CollectionDetail } from '@/pages/CollectionDetail'
import { CollectionsList } from '@/pages/CollectionsList'
import { DesignSystem } from '@/pages/DesignSystem'
import { HistoireDetail } from '@/pages/HistoireDetail'
import { HistoiresList } from '@/pages/HistoiresList'
import { Home } from '@/pages/Home'
import { InstitutionalPage } from '@/pages/InstitutionalPage'
import { JeunesseDetail } from '@/pages/JeunesseDetail'
import { JeunesseList } from '@/pages/JeunesseList'

export function App() {
  return (
    <Routes>
      <Route
        path="/prototype"
        element={
          <PrototypeLayout>
            <Home />
          </PrototypeLayout>
        }
      />

      <Route
        path="/collections"
        element={
          <PrototypeLayout>
            <CollectionsList />
          </PrototypeLayout>
        }
      />

      <Route
        path="/collections/:slug"
        element={
          <PrototypeLayout>
            <CollectionDetail />
          </PrototypeLayout>
        }
      />

      <Route
        path="/carte"
        element={
          <PrototypeLayout>
            <Carte />
          </PrototypeLayout>
        }
      />

      <Route
        path="/histoires"
        element={
          <PrototypeLayout>
            <HistoiresList />
          </PrototypeLayout>
        }
      />

      <Route
        path="/histoires/:slug"
        element={
          <PrototypeLayout>
            <HistoireDetail />
          </PrototypeLayout>
        }
      />

      <Route
        path="/jeunesse"
        element={
          <PrototypeLayout>
            <JeunesseList />
          </PrototypeLayout>
        }
      />

      <Route
        path="/jeunesse/:slug"
        element={
          <PrototypeLayout>
            <JeunesseDetail />
          </PrototypeLayout>
        }
      />

      {INSTITUTIONAL_PAGE_SLUGS.map((slug) => (
        <Route
          key={slug}
          path={`/${slug}`}
          element={
            <PrototypeLayout>
              <InstitutionalPage pageSlug={slug} />
            </PrototypeLayout>
          }
        />
      ))}

      <Route path="/arborescence" element={<Arborescence />} />
      <Route path="/design-system" element={<DesignSystem />} />

      <Route path="*" element={<Navigate to="/prototype" replace />} />
    </Routes>
  )
}
