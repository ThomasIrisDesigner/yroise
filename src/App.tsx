import type React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { AUTH_ENABLED } from '@/config/project'
import { isAuthenticated } from '@/lib/auth'
import { PrototypeLayout } from '@/components/features/PrototypeLayout'
import { Arborescence } from '@/pages/Arborescence'
import { Carte } from '@/pages/Carte'
import { CollectionDetail } from '@/pages/CollectionDetail'
import { CollectionsList } from '@/pages/CollectionsList'
import { DesignSystem } from '@/pages/DesignSystem'
import { HistoireDetail } from '@/pages/HistoireDetail'
import { HistoiresList } from '@/pages/HistoiresList'
import { JeunesseDetail } from '@/pages/JeunesseDetail'
import { JeunesseList } from '@/pages/JeunesseList'
import { Home } from '@/pages/Home'
import { InstitutionalPage } from '@/pages/InstitutionalPage'
import { Login } from '@/pages/Login'
import { INSTITUTIONAL_PAGE_SLUGS } from '@/data/institutionalPages'

function RequireAuth({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }
  return children
}

function RedirectIfAuthed({ children }: { children: React.ReactNode }) {
  if (isAuthenticated()) {
    return <Navigate to="/prototype" replace />
  }
  return children
}

export function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          AUTH_ENABLED ? (
            <RedirectIfAuthed>
              <Login />
            </RedirectIfAuthed>
          ) : (
            <Navigate to="/prototype" replace />
          )
        }
      />

      <Route
        path="/prototype"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <Home />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/collections"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <CollectionsList />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/collections/:slug"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <CollectionDetail />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/carte"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <Carte />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/histoires"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <HistoiresList />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/histoires/:slug"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <HistoireDetail />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/jeunesse"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <JeunesseList />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      <Route
        path="/jeunesse/:slug"
        element={
          <RequireAuth>
            <PrototypeLayout>
              <JeunesseDetail />
            </PrototypeLayout>
          </RequireAuth>
        }
      />

      {INSTITUTIONAL_PAGE_SLUGS.map((slug) => (
        <Route
          key={slug}
          path={`/${slug}`}
          element={
            <RequireAuth>
              <PrototypeLayout>
                <InstitutionalPage pageSlug={slug} />
              </PrototypeLayout>
            </RequireAuth>
          }
        />
      ))}

      <Route
        path="/arborescence"
        element={
          <RequireAuth>
            <Arborescence />
          </RequireAuth>
        }
      />

      <Route
        path="/design-system"
        element={
          <RequireAuth>
            <DesignSystem />
          </RequireAuth>
        }
      />

      <Route
        path="*"
        element={
          <Navigate to={isAuthenticated() ? '/prototype' : '/login'} replace />
        }
      />
    </Routes>
  )
}

