import React from 'react';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

const CRIME_TYPES: string[] = [
    'Homicide', 'Manslaughter', 'Assault', 'Battery', 'Kidnapping', 'False Imprisonment',
    'Domestic Violence', 'Stalking', 'Harassment', 'Sexual Assault', 'Rape', 'Child Abuse',
    'Human Trafficking', 'Forced Labor', 'Organ Trafficking', 'Extortion', 'Blackmail',
    'Robbery', 'Armed Robbery', 'Burglary', 'Home Invasion', 'Theft', 'Shoplifting',
    'Auto Theft', 'Vandalism', 'Arson', 'Fraud', 'Insurance Fraud', 'Tax Evasion',
    'Money Laundering', 'Bribery', 'Corruption', 'Embezzlement', 'Insider Trading',
    'Ponzi Scheme', 'Forgery', 'Counterfeiting', 'Identity Theft', 'Credit Card Fraud',
    'Cybercrime', 'Phishing', 'Malware Distribution', 'Ransomware', 'Data Breach',
    'Unauthorized Access', 'DDoS Attack', 'Crypto Scam', 'Market Manipulation',
    'Drug Trafficking', 'Drug Manufacturing', 'Illegal Possession of Narcotics',
    'Arms Trafficking', 'Illegal Weapons Possession', 'Smuggling', 'Contraband Trade',
    'Environmental Crime', 'Illegal Dumping', 'Wildlife Trafficking', 'Poaching',
    'Illegal Logging', 'War Crime', 'Crime Against Humanity', 'Genocide',
    'Terrorism', 'Financing Terrorism', 'Election Fraud', 'Perjury', 'Obstruction of Justice',
    'Witness Tampering', 'Contempt of Court', 'Public Disorder', 'Riot', 'Hate Crime',
    'Intellectual Property Theft', 'Piracy', 'Trademark Infringement', 'Patent Infringement',
];

const renderRow = (types: string[], rowKey: string) => (
    <div className="relative overflow-hidden py-2">
        <div className="crime-marquee-track flex w-max items-center gap-3">
            {[...types, ...types].map((item, index) => (
                <span
                    key={`${rowKey}-${item}-${index}`}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-light md:text-sm"
                >
                    {item}
                </span>
            ))}
        </div>
    </div>
);

export default function CrimeType() {
    const half = Math.ceil(CRIME_TYPES.length / 2);
    const firstRow = CRIME_TYPES.slice(0, half);
    const secondRow = CRIME_TYPES.slice(half);

    return (
        <Section >
            <Container>
                {/* <h3 className="mb-4 text-center text-base text-text-dim md:text-lg">
                    Common Crime Categories
                </h3> */}

                {renderRow(firstRow, 'row-a')}

                <div className="crime-marquee-reverse">
                    {renderRow(secondRow, 'row-b')}
                </div>
                </Container>

            <style>{`
        .crime-marquee-track {
            animation: crime-marquee 45s linear infinite;
        }
        .crime-marquee-reverse .crime-marquee-track {
            animation-direction: reverse;
            animation-duration: 55s;
        }
        @keyframes crime-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        `}</style>
        </Section>
    );
}
