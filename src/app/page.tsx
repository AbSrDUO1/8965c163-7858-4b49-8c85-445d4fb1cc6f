use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutSplitBottom from '@/components/navigation/NavbarLayoutSplitBottom/NavbarLayoutSplitBottom';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <NavbarLayoutSplitBottom
        logoSrc="/images/logo.svg"
        logoWidth={150}
        logoHeight={50}
        navItems={[{ name: "Hero", id: "hero" }, { name: "About", id: "about" }, { name: "How to Buy", id: "how-to-buy" }, { name: "Tokenomics", id: "tokenomics" }, { name: "Footer", id: "footer" }]}
        buttonText="Start Free"
        onButtonClick={() => {}}
        className="sticky"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to NovaPulse"
          description="Unlock the potential of smart SaaS tools to elevate your business."
          tagLabel="Futuristic"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="NovaPulse is designed to streamline your SaaS experience, making complex processes simple and efficient."
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="reveal"
          steps={[
            { title: "Step 1", description: "Sign up for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
            { title: "Step 2", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
            { title: "Step 3", description: "Start using our tools", image: "/images/placeholder3.avif", position: "right", isCenter: false },
          ]}
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Our Tokenomics"
          description="Transparent metrics to ensure trust and understanding."
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "10M", description: "Initial Offering" },
            { value: "1M", description: "Liquidity" },
            { value: "5%", description: "Tax on Transactions" },
            { value: "90%", description: "Ownership" },
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NovaPulse Logo"
          logoText="NovaPulse"
          columns={[
            { items: [{ label: "Privacy Policy", onClick: () => {} }, { label: "Terms of Service", onClick: () => {} }] },
            { items: [{ label: "About Us", onClick: () => {} }, { label: "Contact", onClick: () => {} }] },
            { items: [{ label: "Support", onClick: () => {} }, { label: "FAQ", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 NovaPulse. All Rights Reserved."
          onPrivacyClick={() => {}}
          className=""
          containerClassName=""
        />
      </div>
    </SiteThemeProvider>
  );
}