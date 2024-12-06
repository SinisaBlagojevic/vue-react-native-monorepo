export type Store = {
  resetStore: () => void
  language: string
  setLanguage: (language: string) => void
  user: User
  setUser: (user: User) => void
  authState: AuthState
  setAuthState: (authState: AuthState) => void
}

export type User = {
  first_name: string
  last_name: string
  email: string
  password: string
  is_superadmin: string
  onboarding_status: string
  default_company_id: string
  gauth_id: string
  gauth_type: string
  email_verified_at: string
  last_login_at: string
  ownership_percentage: string
  rhythm_notifications_settings: string
  rhythm_notifications_type: string
  notification_settings: string
  timezone: string
  is_pfp_coach: string
  two_factor_code: string
  two_factor_expires_at: string
  is_kpi_metrics: string
}

export type AuthState = {
  token: string
  authenticated: boolean
}
