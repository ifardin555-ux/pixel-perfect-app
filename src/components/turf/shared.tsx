import { Link } from "@tanstack/react-router";
import { Bell, Search, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export const IMG = {
  logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs-KcCfiqzGwsbJgbK2ejQ5axolE1qfHEQwnLD0dbuVP3waltu9vpLaRt-7wF0DUJIPK2SbVcZapxUNN--Ucrx0De7NIoI_jol-SVjCBnpDbS__YuU8Sr_Pty1Jrv-80vf_yCR4-OLJgYAHnIp4kbUx6dbWVbszeMse3enEvEWskeerywwxZ78cyp8EWsZVZ6jVMs8k3hS_RzH1h3kuLignHa9kn0VsAY1fFUzxY4fU4H_TLPLI77m",
  profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuApdTXKgrtam5swfOg4Rbd5L9EXKCni7U0bK4cxSbQD9MSsV6qptcLNptaFGwV_fbvN1GP9UPuuvxR0uek2_bFcrt8VmSIfTjG5GTqrN6QmVhppA6cw-p9SFq_M2o0F0LUZll45OnHwmX4IuFSLGOrutNCSQybzgKVU-XmLywLP_9IbU_CZ4ACOMgLhNQNsxmT5GHSZpItuvtGIUWsyypvfC47_A9vgF7Ywoy--Y-3N58Uhj8o4j9yy",
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfRHhpRrLMsP3cd-4pbZu7Sp3tgLbNt49mmSNGVsl_skCqNSLjRz83RsXKvBIN7Pe3g8Z-mEbG2C32k815_geGziIAT9Y4bhgi8DE_08i4rdU-ncd31JgMUfio65bd6PEGZURyZYj3bMNFu5sWNwKpNGdtrwn9aOjlUHVxwgU24KAFicBsDSEhsoNJ0LY9AnMj7hZwSU36-nh1P9W4ojEsGtDPIcstuswZq42KLN-DE5Ig4vAy0loM",
  football: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs57ljN9GMakXSdfORC7O03Uerq0pmyFUI1H34OeO2sgBXHDP_SDWbQDM_Wv_xNqpidHYAeb2Z6fUiBwG2YHoRolXLkIlu1UAXmE-N9eaGHHIzUO-N0hu-MYUkhXqeYw01bk_8QuROPJgpSxjfhcbTpyAl3DK5Kisbl4C85rnWX7n9_96m112cggOdc2mc2Z23aDRF4BwP4NhNKCFAfqGacJIqJwcngeX04mR7iO2iNVdNTrqZR700",
  cricket: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuC2pfefKOZS7Y70DrmdyxKQ5I0zgc5T4JKWePpeaIVB-crFshVpfhZIy4lxr1IqPFe5V4sLdk7jg11hPVCnVxiRqStVn8ihdmouiJbwK9Pt7qpIQm98RMHkEdFJDJuajI9axtIDhP3N0Y82q7SRuFg9uzJCfK8VdWmv9F3y43HI2rExn7cMIH63XpaCvajwAiVKVpBnTzKhos6i_9CBrFvYZHfbx0ra8Ian61vet4zoh_q46qWeYM",
  badminton: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVeYIArgpy_y9GzBno5z2Ym5KGS-x2EXov3zpq9Thto6-CFnSUOdCpvv-8hbcw7hpAAdHQOoGz3QK12b8v11EWBcKIj4PA6aT-LyQtZ5DbBqeeKU9PG-RrVo5CSG6xs_Z7-K2WunjH60GkqMUje_TKl6yq80K0q8OpsZxPmJ1w0iqD0qcV60lFdypMMbbzf9Bsd2CvValeJlbyqJG986tAHhOsPFJ0QfOPd00pGdGK5woWxHwxYTgQ",
  arena2: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9xTgCs0yrgG2xagJy2euCaE3yeJPy9vUYF9dHeh_cfX1SXVF4k6Mlp_2k1AcAbSIxRkvuzsA4RZHUEgVqmlbSq56LLOJkJDMuDf16IyUXRcztuSZQjMEHVzjNMDE3EeVABnJZ9IWkJqZBwpTVCACTgkEATufG6sqy-zOu79CCVKJsEjyiGLVESiIVZidkmNTLP5cZ7M-QiqFAwgY4Ex1RJwv55kgk2jgc1hcHqjGOOs4Hp5wOk9na",
  arena3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfTaQycRbdgcXcXC4lPSAovU1bQyw33GVo1czjyfe-9GtROlyqxHkgowKIf68pd3gks41ZQWjMtba4kCzWlIR3nG3CiMbIKxiXPaYv68SmwpLW44EIIm69sd2tGE7HXElGUOttUGEX1aT4E-C7ZbGE3gwZKN2BgvyzShj2-ltuwA_L_37aGxTviEHlvrkvOK3d4IwHO6LmAQ9-IusP4vUZvIcO5igHTN_MMoDDQIOghUoYWNDa1G3V",
  owner: "https://lh3.googleusercontent.com/aida-public/AB6AXuB63jVEaZUj7KeJStKSefLVrX78bOGOgkYXXW_Q0iuc4JiZpLn-EyE495WEHnxMHwQsAqTu1mir98Q7rjt0qOdEm_F4FDfx0Lgjk2xvgOCiN_isZr3ejldyWc1hXoF3M3Xd0gqbob8ZzbIqWIHF6bpw63s-LVIM2poazfgF6581D8cXcuQj9qI2FVRurhLMeYU4cdzpBcUsXLU5syPDQ_FpDH72c3nyMh3YplyZouTKmRZYVj18INQM",
};

export function Header() {
  return <header className="sticky top-0 z-50 h-16 bg-navy text-nav-foreground shadow-sm"><div className="mx-auto flex h-full max-w-[1220px] items-center gap-5 px-5">
    <Link to="/" className="flex shrink-0 items-center gap-2"><img src={IMG.logo} alt="TurfNation" className="size-8 rounded-sm"/><strong className="text-lg"><span>Turf</span><span className="text-primary">Nation</span></strong></Link>
    <div className="hidden h-9 w-72 items-center gap-2 rounded-md bg-nav-input px-3 text-xs text-nav-muted lg:flex"><Search className="size-4"/> Search pitch, area, or sport...</div>
    <nav className="ml-auto hidden items-center gap-7 text-sm font-semibold md:flex"><Link to="/" className="text-primary">Explore Turfs</Link><Link to="/owner">How It Works</Link><Link to="/admin">Tournaments</Link></nav>
    <Link to="/owner" className="ml-auto rounded-md bg-primary px-4 py-2 text-xs font-bold text-primary-foreground md:ml-5">List Your Turf</Link>
    <Bell className="size-5"/><img src={IMG.profile} alt="Profile" className="size-8 rounded-full border-2 border-primary"/>
  </div></header>
}

export function Page({ children, className="" }: { children: ReactNode; className?: string }) { return <><Header/><main className={className}>{children}</main></> }
export function Panel({ children, className="" }: { children: ReactNode; className?: string }) { return <section className={`rounded-lg border border-border bg-card ${className}`}>{children}</section> }
export function Kicker({ children }: { children: ReactNode }) { return <div className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary">{children}</div> }
export function SectionTitle({ children, sub }: { children: ReactNode; sub?: string }) { return <div><h2 className="text-xl font-bold">{children}</h2>{sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}</div> }
export function Verify({ text="Verified" }: { text?: string }) { return <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary"><ShieldCheck className="size-3.5"/>{text}</span> }