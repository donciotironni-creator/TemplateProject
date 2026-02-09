"use client";

import { useEffect } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function DashboardPage() {
    const { user, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return <div className="flex h-screen items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <nav className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
                <h1 className="text-xl font-bold">MyApp Dashboard</h1>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-600">Logged in as: <strong>{user.email}</strong></span>
                    <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
                </div>
            </nav>

            <main className="p-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-slate-500">Total Users</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm font-medium text-slate-500">Active Sessions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">56</div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-full">
                        <CardHeader>
                            <CardTitle>Welcome back!</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-600">
                                This is your premium dashboard template. You have <strong>{user.role}</strong> privileges.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
