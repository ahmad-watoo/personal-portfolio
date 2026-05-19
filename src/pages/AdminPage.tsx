import { useState, useEffect, useCallback } from 'react'
import {
  Box, Typography, TextField, Button, IconButton,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Chip, Tooltip, Dialog, DialogContent, DialogTitle,
  CircularProgress, Alert, Divider, InputAdornment,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import {
  Mail, Trash2, Eye, EyeOff, LogOut, RefreshCw,
  Search, CheckCheck, X, Lock, MessageSquare,
  Users, Clock, 
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import type { MessageRow } from '@/lib/supabase'

// ─────────────────────────────────────────────────────────────
//  Admin password — stored in .env.local
//  Never hardcode this — change it in .env.local
// ─────────────────────────────────────────────────────────────
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD as string

// ─────────────────────────────────────────────────────────────
//  LoginGate — shown before admin access
// ─────────────────────────────────────────────────────────────
function LoginGate({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState('')
  const [error, setError]       = useState(false)
  const [show, setShow]         = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      // Store session in sessionStorage (clears on tab close)
      sessionStorage.setItem('admin_auth', 'true')
      onLogin()
    } else {
      setError(true)
      setPassword('')
    }
  }

  return (
    <Box sx={{
      minHeight:       '100vh',
      display:         'flex',
      alignItems:      'center',
      justifyContent:  'center',
      backgroundColor: 'var(--color-bg)',
      px:              '1rem',
    }}>
      <Box sx={{
        width:           '100%',
        maxWidth:        380,
        p:               '2.5rem',
        borderRadius:    '20px',
        border:          '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg-2)',
        boxShadow:       'var(--shadow-xl)',
      }}>
        {/* Logo */}
        <Box sx={{ textAlign: 'center', mb: '2rem' }}>
          <Box sx={{
            width: 56, height: 56, borderRadius: '14px', mx: 'auto', mb: '1rem',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(99,102,241,0.35)',
          }}>
            <Lock size={24} color="#fff" />
          </Box>
          <Typography sx={{ fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.03em' }}>
            Admin Access
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: '0.25rem' }}>
            Enter your password to continue
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: '1.25rem', borderRadius: '8px' }} onClose={() => setError(false)}>
            Incorrect password. Try again.
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Password"
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => { setPassword(e.target.value); setError(false) }}
            autoFocus
           slotProps={{
          input: {
          endAdornment: (
          <InputAdornment position="end">
         <IconButton onClick={() => setShow((s) => !s)} size="small">
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
         </IconButton>
        </InputAdornment>
         ),
       },}}
            sx={{
              mb: '1.25rem',
              '& .MuiOutlinedInput-root': {
                borderRadius: '10px',
                '& fieldset': { borderColor: error ? 'error.main' : 'var(--color-border)' },
              },
            }}
          />
          <Button type="submit" variant="contained" fullWidth size="large"
            sx={{
              borderRadius: '10px', fontWeight: 700, py: '0.75rem',
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
              boxShadow: 'none',
              '&:hover': { boxShadow: '0 8px 24px rgba(99,102,241,0.35)' },
            }}
          >
            Sign In
          </Button>
        </Box>

        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: '1.5rem', fontSize: '0.75rem' }}>
          This page is private. Unauthorized access is prohibited.
        </Typography>
      </Box>
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
//  Stat Card
// ─────────────────────────────────────────────────────────────
function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number | string; color: string }) {
  return (
    <Box sx={{
      p: '1.25rem', borderRadius: '14px',
      border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-2)',
      display: 'flex', alignItems: 'center', gap: '1rem',
      transition: 'all 0.2s',
      '&:hover': { borderColor: alpha(color, 0.3), transform: 'translateY(-2px)', boxShadow: `0 8px 24px ${alpha(color, 0.1)}` },
    }}>
      <Box sx={{ width: 44, height: 44, borderRadius: '11px', backgroundColor: alpha(color, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', color, flexShrink: 0 }}>
        {icon}
      </Box>
      <Box>
        <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: 'text.primary' }}>
          {value}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem', mt: '0.1rem' }}>
          {label}
        </Typography>
      </Box>
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
//  Message Detail Dialog
// ─────────────────────────────────────────────────────────────
function MessageDialog({ msg, onClose }: { msg: MessageRow | null; onClose: () => void }) {
  if (!msg) return null
  return (
    <Dialog open={!!msg} onClose={onClose} maxWidth="sm" fullWidth
      slotProps={{ paper: { sx: { borderRadius: '16px', backgroundColor: 'var(--color-bg)', backgroundImage: 'none', border: '1px solid var(--color-border)' } } }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 0 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>Message Detail</Typography>
        <IconButton onClick={onClose} size="small"><X size={18} /></IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', pt: '1rem' }}>
          {/* Sender info */}
          <Box sx={{ p: '1rem', borderRadius: '10px', backgroundColor: 'var(--color-bg-2)', border: '1px solid var(--color-border)' }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.secondary', mb: '0.5rem' }}>From</Typography>
            <Typography sx={{ fontWeight: 700 }}>{msg.first_name} {msg.last_name}</Typography>
            <Typography variant="body2" sx={{ color: 'primary.main' }}>{msg.email}</Typography>
          </Box>
          {/* Subject */}
          <Box>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.secondary', mb: '0.35rem' }}>Subject</Typography>
            <Typography sx={{ fontWeight: 600 }}>{msg.subject}</Typography>
          </Box>
          <Divider />
          {/* Message body */}
          <Box>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'text.secondary', mb: '0.35rem' }}>Message</Typography>
            <Typography variant="body2" sx={{ color: 'text.primary', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>{msg.message}</Typography>
          </Box>
          <Divider />
          {/* Timestamp */}
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
            Received: {new Date(msg.created_at).toLocaleString('en-PK', { dateStyle: 'long', timeStyle: 'short' })}
          </Typography>
          {/* Reply button */}
          <Button
            component="a"
            href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
            variant="contained"
            fullWidth
            startIcon={<Mail size={16} />}
            sx={{ borderRadius: '10px', fontWeight: 700, background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', boxShadow: 'none' }}
          >
            Reply via Email
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

// ─────────────────────────────────────────────────────────────
//  Main Dashboard
// ─────────────────────────────────────────────────────────────
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [messages, setMessages]   = useState<MessageRow[]>([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState<string | null>(null)
  const [search, setSearch]       = useState('')
  const [filter, setFilter]       = useState<'all' | 'unread' | 'read'>('all')
  const [selected, setSelected]   = useState<MessageRow | null>(null)
  const [deleting, setDeleting]   = useState<string | null>(null)

  // ── Fetch messages ────────────────────────────────────────
  const fetchMessages = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: sbError } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })
         console.log('Fetched messages:', data, sbError)
      if (sbError) throw new Error(sbError.message)
      setMessages(data ?? [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load messages')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchMessages() }, [fetchMessages])

  // ── Mark as read ──────────────────────────────────────────
  const markRead = async (id: string, isRead: boolean) => {
    await supabase.from('messages').update({ is_read: !isRead }).eq('id', id)
    setMessages(prev => prev.map(m => m.id === id ? { ...m, is_read: !isRead } : m))
  }

  // ── Mark all as read ──────────────────────────────────────
  const markAllRead = async () => {
    await supabase.from('messages').update({ is_read: true }).eq('is_read', false)
    setMessages(prev => prev.map(m => ({ ...m, is_read: true })))
  }

  // ── Delete message ────────────────────────────────────────
  const deleteMessage = async (id: string) => {
    setDeleting(id)
    await supabase.from('messages').delete().eq('id', id)
    setMessages(prev => prev.filter(m => m.id !== id))
    setDeleting(null)
  }

  // ── Open detail + auto mark read ─────────────────────────
  const openMessage = async (msg: MessageRow) => {
    setSelected(msg)
    if (!msg.is_read) await markRead(msg.id, false)
  }

  // ── Stats ─────────────────────────────────────────────────
  const total   = messages.length
  const unread  = messages.filter(m => !m.is_read).length
  const today   = messages.filter(m => new Date(m.created_at).toDateString() === new Date().toDateString()).length

  // ── Filter + search ───────────────────────────────────────
  const visible = messages.filter(m => {
    const matchesFilter =
      filter === 'all' ? true :
      filter === 'unread' ? !m.is_read : m.is_read

    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      m.first_name.toLowerCase().includes(q) ||
      m.last_name.toLowerCase().includes(q) ||
      m.email.toLowerCase().includes(q) ||
      m.subject.toLowerCase().includes(q)

    return matchesFilter && matchesSearch
  })

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)', pb: '3rem' }}>

      {/* ── Top bar ──────────────────────────────────────── */}
      <Box sx={{
        position:        'sticky', top: 0, zIndex: 100,
        backgroundColor: alpha('#0f0f13', 0.9),
        backdropFilter:  'blur(20px)',
        borderBottom:    '1px solid var(--color-border)',
        px:              { xs: '1rem', md: '2rem' },
        py:              '1rem',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'space-between',
        gap:             '1rem',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Box sx={{ width: 34, height: 34, borderRadius: '9px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <MessageSquare size={16} color="#fff" />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Admin Dashboard
            </Typography>
            <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary' }}>
              Muhammad Ahmad · Portfolio
            </Typography>
          </Box>
          {unread > 0 && (
            <Chip label={`${unread} new`} size="small" sx={{ backgroundColor: alpha('#6366f1', 0.15), color: 'primary.main', fontWeight: 700, fontSize: '0.72rem', height: 22 }} />
          )}
        </Box>

        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
          <Tooltip title="Refresh">
            <IconButton onClick={fetchMessages} size="small" sx={{ color: 'text.secondary', border: '1px solid var(--color-border)', borderRadius: '8px', width: 34, height: 34 }}>
              <RefreshCw size={15} />
            </IconButton>
          </Tooltip>
          <Button
            onClick={onLogout}
            variant="outlined"
            size="small"
            startIcon={<LogOut size={14} />}
            sx={{ borderRadius: '8px', fontWeight: 600, fontSize: '0.78rem', borderColor: 'var(--color-border)', color: 'text.secondary', '&:hover': { borderColor: 'error.main', color: 'error.main' } }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* ── Page content ─────────────────────────────────── */}
      <Box sx={{ maxWidth: 1100, mx: 'auto', px: { xs: '1rem', md: '2rem' }, pt: '2rem' }}>

        {/* Stats row */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: '1rem', mb: '2rem' }}>
          <StatCard icon={<MessageSquare size={20} />} label="Total Messages" value={total}  color="#6366f1" />
          <StatCard icon={<Users size={20} />}         label="Unread"         value={unread} color="#f59e0b" />
          <StatCard icon={<Clock size={20} />}         label="Today"          value={today}  color="#22c55e" />
        </Box>

        {/* Toolbar */}
        <Box sx={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', mb: '1.25rem', alignItems: 'center' }}>
          {/* Search */}
          <TextField
            size="small"
            placeholder="Search name, email, subject..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            slotProps={{
        input: {
          startAdornment: (
         <InputAdornment position="start">
         <Search size={15} color="var(--color-text-secondary)" />
        </InputAdornment>
                ),
      endAdornment: search ? (
        <InputAdornment position="end">
        <IconButton size="small" onClick={() => setSearch('')}>
            <X size={13} />
           </IconButton>
          </InputAdornment>
           ) : null,
      },
             }}
            sx={{
              flex: 1, minWidth: 220,
              '& .MuiOutlinedInput-root': { borderRadius: '9px', fontSize: '0.875rem', '& fieldset': { borderColor: 'var(--color-border)' } },
            }}
          />

          {/* Filter chips */}
          {(['all', 'unread', 'read'] as const).map(f => (
            <Button key={f} size="small" onClick={() => setFilter(f)}
              variant={filter === f ? 'contained' : 'outlined'}
              sx={{ borderRadius: '8px', fontWeight: 600, fontSize: '0.78rem', textTransform: 'capitalize', boxShadow: 'none', borderColor: filter !== f ? 'var(--color-border)' : undefined, color: filter !== f ? 'text.secondary' : undefined, backgroundColor: filter !== f ? 'transparent' : undefined }}
            >
              {f} {f === 'all' ? `(${total})` : f === 'unread' ? `(${unread})` : `(${total - unread})`}
            </Button>
          ))}

          {/* Mark all read */}
          {unread > 0 && (
            <Tooltip title="Mark all as read">
              <Button size="small" onClick={markAllRead} startIcon={<CheckCheck size={14} />}
                sx={{ borderRadius: '8px', fontWeight: 600, fontSize: '0.78rem', color: 'primary.main', borderColor: alpha('#6366f1', 0.3), border: '1px solid', '&:hover': { backgroundColor: alpha('#6366f1', 0.06) } }}
              >
                Mark all read
              </Button>
            </Tooltip>
          )}
        </Box>

        {/* Error */}
        {error && (
          <Alert severity="error" sx={{ mb: '1rem', borderRadius: '10px' }} action={<Button size="small" onClick={fetchMessages}>Retry</Button>}>
            {error}
          </Alert>
        )}

        {/* Table */}
        <Paper elevation={0} sx={{ borderRadius: '16px', border: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-2)', overflow: 'hidden' }}>
          {loading ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: '4rem', gap: '1rem' }}>
              <CircularProgress size={24} />
              <Typography sx={{ color: 'text.secondary' }}>Loading messages...</Typography>
            </Box>
          ) : visible.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: '4rem' }}>
              <MessageSquare size={40} color="var(--color-text-secondary)" style={{ margin: '0 auto 1rem' }} />
              <Typography sx={{ fontWeight: 600, color: 'text.secondary' }}>
                {search || filter !== 'all' ? 'No messages match your search' : 'No messages yet'}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mt: '0.35rem' }}>
                {!search && filter === 'all' ? 'Messages from your contact form will appear here.' : ''}
              </Typography>
            </Box>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ '& th': { backgroundColor: 'var(--color-bg-3)', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'text.secondary', borderBottom: '1px solid var(--color-border)', py: '0.75rem' } }}>
                    <TableCell width={8} />
                    <TableCell>Sender</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>Received</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {visible.map(msg => (
                    <TableRow
                      key={msg.id}
                      onClick={() => openMessage(msg)}
                      sx={{
                        cursor: 'pointer',
                        backgroundColor: msg.is_read ? 'transparent' : alpha('#6366f1', 0.04),
                        '&:hover': { backgroundColor: alpha('#6366f1', 0.06) },
                        '& td': { borderBottom: '1px solid var(--color-border)', py: '0.9rem' },
                        transition: 'background-color 0.15s',
                      }}
                    >
                      {/* Unread dot */}
                      <TableCell sx={{ pr: 0, pl: '1rem' }}>
                        {!msg.is_read && (
                          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'primary.main', flexShrink: 0 }} />
                        )}
                      </TableCell>

                      {/* Sender */}
                      <TableCell>
                        <Box>
                          <Typography sx={{ fontWeight: msg.is_read ? 500 : 700, fontSize: '0.875rem', color: 'text.primary' }}>
                            {msg.first_name} {msg.last_name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem' }}>
                            {msg.email}
                          </Typography>
                        </Box>
                      </TableCell>

                      {/* Subject */}
                      <TableCell>
                        <Typography sx={{ fontWeight: msg.is_read ? 400 : 600, fontSize: '0.875rem', color: 'text.primary', maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {msg.subject}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.75rem', maxWidth: 280, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {msg.message}
                        </Typography>
                      </TableCell>

                      {/* Date */}
                      <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.78rem', whiteSpace: 'nowrap' }}>
                          {new Date(msg.created_at).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
                          {new Date(msg.created_at).toLocaleTimeString('en-PK', { hour: '2-digit', minute: '2-digit' })}
                        </Typography>
                      </TableCell>

                      {/* Actions */}
                      <TableCell align="right" onClick={e => e.stopPropagation()}>
                        <Box sx={{ display: 'flex', gap: '0.25rem', justifyContent: 'flex-end' }}>
                          {/* Reply */}
                          <Tooltip title="Reply via email">
                            <IconButton
                              component="a"
                              href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                              size="small"
                              sx={{ color: 'primary.main', width: 32, height: 32, '&:hover': { backgroundColor: alpha('#6366f1', 0.1) } }}
                            >
                              <Mail size={15} />
                            </IconButton>
                          </Tooltip>

                          {/* Mark read/unread */}
                          <Tooltip title={msg.is_read ? 'Mark unread' : 'Mark read'}>
                            <IconButton
                              size="small"
                              onClick={() => markRead(msg.id, msg.is_read)}
                              sx={{ color: 'text.secondary', width: 32, height: 32, '&:hover': { backgroundColor: 'var(--color-bg-3)' } }}
                            >
                              {msg.is_read ? <EyeOff size={15} /> : <Eye size={15} />}
                            </IconButton>
                          </Tooltip>

                          {/* Delete */}
                          <Tooltip title="Delete message">
                            <IconButton
                              size="small"
                              onClick={() => deleteMessage(msg.id)}
                              disabled={deleting === msg.id}
                              sx={{ color: 'text.secondary', width: 32, height: 32, '&:hover': { color: 'error.main', backgroundColor: alpha('#ef4444', 0.08) } }}
                            >
                              {deleting === msg.id
                                ? <CircularProgress size={13} />
                                : <Trash2 size={15} />
                              }
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>

        {/* Footer count */}
        {!loading && visible.length > 0 && (
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'right', mt: '0.75rem', fontSize: '0.78rem' }}>
            Showing {visible.length} of {total} messages
          </Typography>
        )}
      </Box>

      {/* Message detail dialog */}
      <MessageDialog msg={selected} onClose={() => setSelected(null)} />
    </Box>
  )
}

// ─────────────────────────────────────────────────────────────
//  AdminPage — top-level: login gate → dashboard
// ─────────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed, setAuthed] = useState(
    // Persist login within the same browser tab session
    sessionStorage.getItem('admin_auth') === 'true'
  )

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth')
    setAuthed(false)
  }

  if (!authed) return <LoginGate onLogin={() => setAuthed(true)} />
  return <Dashboard onLogout={handleLogout} />
}