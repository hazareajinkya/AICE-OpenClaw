import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-[#060810] text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        <h1 className="mt-8 text-4xl font-bold text-white">
          OpenClaw Setup Guide
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Follow these steps to set up OpenClaw on your own server. This guide
          is for engineers who are comfortable with terminal commands.
        </p>

        {/* Warning */}
        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
          <p className="text-sm text-yellow-200">
            ⚠️ <strong>Note:</strong> This setup requires technical knowledge.
            If you&apos;d rather skip the hassle,{" "}
            <Link href="/#pricing" className="underline text-[#ff6b6b]">
              let us set it up for you for $99
            </Link>
            .
          </p>
        </div>

        {/* Prerequisites */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li className="flex gap-3">
              <span className="text-[#ff6b6b]">•</span>
              <span>Node.js ≥ 22 runtime installed</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ff6b6b]">•</span>
              <span>pnpm package manager</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ff6b6b]">•</span>
              <span>A VPS or server (Ubuntu 22.04+ recommended)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ff6b6b]">•</span>
              <span>Domain name (optional, for WSS gateway)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#ff6b6b]">•</span>
              <span>Anthropic API key (for Claude)</span>
            </li>
          </ul>
        </section>

        {/* Step 1 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 1: Clone the Repository
          </h2>
          <p className="mt-3 text-slate-400">
            Fork and clone the OpenClaw repository to your local machine or
            server.
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`git clone https://github.com/anthropics/claude-code.git
cd claude-code
pnpm install`}</pre>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 2: Configure Environment
          </h2>
          <p className="mt-3 text-slate-400">
            Create your environment configuration file with your API keys.
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`cp .env.example .env

# Edit .env with your values:
ANTHROPIC_API_KEY=your_api_key_here
SANDBOX_MODE=non-main
WSS_PORT=18789`}</pre>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 3: Initialize OAuth2
          </h2>
          <p className="mt-3 text-slate-400">
            Set up OAuth2 authentication for messenger integrations (Telegram,
            WhatsApp, etc.).
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`# Generate OAuth2 credentials
pnpm run oauth:init

# This will create oauth.json with your credentials
# Keep this file secure and never commit it to git`}</pre>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 4: Set Up Systemd Daemon
          </h2>
          <p className="mt-3 text-slate-400">
            Create a systemd service to keep OpenClaw running 24/7.
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`# Create service file
sudo nano /etc/systemd/system/openclaw.service

# Add the following content:
[Unit]
Description=OpenClaw AI Assistant
After=network.target

[Service]
Type=simple
User=your_username
WorkingDirectory=/path/to/claude-code
ExecStart=/usr/bin/pnpm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target`}</pre>
          </div>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable openclaw
sudo systemctl start openclaw

# Check status
sudo systemctl status openclaw`}</pre>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 5: Configure WSS Gateway
          </h2>
          <p className="mt-3 text-slate-400">
            Set up the WebSocket Secure gateway on port 18789 for real-time
            communication.
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`# If using nginx as reverse proxy:
sudo nano /etc/nginx/sites-available/openclaw

# Add WebSocket configuration:
location /ws {
    proxy_pass http://localhost:18789;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
}

# Test and reload nginx
sudo nginx -t
sudo systemctl reload nginx`}</pre>
          </div>
        </section>

        {/* Step 6 */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">
            Step 6: Connect Messenger
          </h2>
          <p className="mt-3 text-slate-400">
            Connect your preferred messenger (Telegram, WhatsApp, etc.) to start
            using OpenClaw.
          </p>
          <div className="mt-4 rounded-lg bg-[#0a0c14] border border-white/10 p-4 font-mono text-sm text-slate-300 overflow-x-auto">
            <pre>{`# For Telegram:
pnpm run connect:telegram

# For WhatsApp:
pnpm run connect:whatsapp

# Follow the prompts to authenticate`}</pre>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Troubleshooting</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg bg-[#0a0c14] border border-white/10 p-4">
              <h3 className="font-semibold text-white">EBADF Error</h3>
              <p className="mt-2 text-sm text-slate-400">
                This usually means a file descriptor issue. Try restarting the
                service and check your Node.js version.
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0c14] border border-white/10 p-4">
              <h3 className="font-semibold text-white">PTY Spawn Failures</h3>
              <p className="mt-2 text-sm text-slate-400">
                Install the required PTY dependencies:{" "}
                <code className="bg-white/10 px-1 rounded">
                  sudo apt install python3 make g++
                </code>
              </p>
            </div>
            <div className="rounded-lg bg-[#0a0c14] border border-white/10 p-4">
              <h3 className="font-semibold text-white">WSS Connection Issues</h3>
              <p className="mt-2 text-sm text-slate-400">
                Ensure port 18789 is open in your firewall and nginx is properly
                configured for WebSocket upgrades.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl border border-[#ff6b6b]/30 bg-[#ff6b6b]/5 p-8 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Too complicated?
          </h2>
          <p className="mt-3 text-slate-400">
            Skip the terminal commands and let us handle everything for you.
          </p>
          <Link
            href="/#pricing"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#f97316] px-8 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(255,107,107,0.35)] transition hover:translate-y-[-1px]"
          >
            Get Setup for $99 →
          </Link>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-slate-500">
          <p>© 2024 AICE OpenClaw. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
