import Script from "next/script";
import "./globals.css";
import Whatsapp from "@/components/Whatsapp";
import TawkToScript from "@/components/TawkToScript";

export const metadata = {
    title: "RNR Studiezs - Best Career Counselling Consultant in Bhubaneswar",
    description: "Get expert career counselling in Bhubaneswar at RNR Studiezs. Our consultants provide personalized guidance to help you navigate your career path successfully.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* SEO and Meta */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="google-site-verification" content="ubUu4Hd7rygl3gvaw4qgXr5DuyvcQzAjIVR3DnmuT-Q" /> {/* Google Site Verification */}
                <link rel="icon" href="/assets/images/favicons/favicon.ico" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* Google Fonts */}
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,500i,600,700,800%7CSatisfy&display=swap" rel="stylesheet" />
                
                {/* Google Tag Manager */}
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-TMCS2ZQX');
                    `}
                </Script>

                {/* Google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-16517649934"></Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16517649934');
                    gtag('config', 'G-7ESDJRCSDX');
                    `}
                </Script>
                
                {/* External Stylesheets */}
                <link rel="stylesheet" href="/assets/css/animate.min.css" />
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css" />
                <link rel="stylesheet" href="/assets/plugins/kipso-icons/style.css" />
                <link rel="stylesheet" href="/assets/css/magnific-popup.css" />
                <link rel="stylesheet" href="/assets/css/vegas.min.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />
            </head>

            <body>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-TMCS2ZQX"
                        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
                </noscript>

                {/* Page Content */}
                {children}

                {/* Third-Party Scripts */}
                <TawkToScript />
                {/* Uncomment Whatsapp component if needed */}
                {/* <Whatsapp /> */}

                {/* External Scripts */}
                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/bootstrap.bundle.min.js"></script>
            </body>
        </html>
    );
}
