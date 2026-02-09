"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

interface SystemStatus {
    status: string;
    database: string;
    serverTime: string;
    environment: string;
    version: string;
}

export default function TestPage() {
    const [data, setData] = useState<SystemStatus | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function checkStatus() {
            try {
                const res = await fetch("http://127.0.0.1:5000/api/system/status");
                if (!res.ok) throw new Error(`Backend unreachable: ${res.status} ${res.statusText}`);
                const json = await res.json();
                console.log("Backend response:", json);
                setData(json);
            } catch (err: any) {
                console.error("Test page error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        checkStatus();
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-6">
            <div className="w-full max-w-2xl space-y-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900">Template Functional Test</h1>
                    <p className="mt-2 text-slate-600">Verificăm conexiunea între Frontend și Backend pe localhost</p>
                </div>

                <Card className="border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            Status Sistem
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin text-indigo-600" />
                            ) : error ? (
                                <Badge variant="destructive" className="gap-1">
                                    <XCircle className="h-3 w-3" /> Offline
                                </Badge>
                            ) : (
                                <Badge variant="default" className="bg-green-500 hover:bg-green-600 gap-1">
                                    <CheckCircle2 className="h-3 w-3" /> Online
                                </Badge>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {loading ? (
                            <div className="py-10 text-center text-slate-500 text-sm italic">Sondăm backend-ul...</div>
                        ) : error ? (
                            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 border border-red-100">
                                <strong>Eroare:</strong> {error}. Asigură-te că rulezi backend-ul cu <code>dotnet run</code> în apps/api.
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold uppercase text-slate-400">Database</p>
                                    <p className="font-medium text-slate-700">{data?.database}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold uppercase text-slate-400">Environment</p>
                                    <p className="font-medium text-slate-700">{data?.environment}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold uppercase text-slate-400">Version</p>
                                    <p className="font-medium text-slate-700">{data?.version}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-semibold uppercase text-slate-400">Server Time</p>
                                    <p className="text-sm font-medium text-slate-700">{new Date(data?.serverTime || "").toLocaleString()}</p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-dashed border-slate-200 p-4 text-center">
                        <p className="text-2xl font-bold text-indigo-600">FE</p>
                        <p className="text-xs text-slate-500">Next.js 14</p>
                    </div>
                    <div className="rounded-xl border border-dashed border-slate-200 p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">BE</p>
                        <p className="text-xs text-slate-500">.NET 8 Core</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
