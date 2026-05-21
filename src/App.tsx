import type React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { isAuthenticated } from '@/lib/auth'
import { PrototypeLayout } from '@/components/features/PrototypeLayout'
import { CollectionDetail } from '@/pages/CollectionDetail'
import { CollectionsList } from '@/pages/CollectionsList'
import { DesignSystem } from '@/pages/DesignSystem'
import { Home } from '@/pages/Home'
import { Login } from '@/pages/Login'

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
          <RedirectIfAuthed>
            <Login />
          </RedirectIfAuthed>
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
        path="/design-system"
        element={
          <RequireAuth>
            <DesignSystem />
          </RequireAuth>
        }
      />

      <Route
        path="*"
        element={<Navigate to={isAuthenticated() ? '/prototype' : '/login'} replace />}
      />
    </Routes>
  )
}

