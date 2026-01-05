import React from 'react';

// Import team member images
import AbhijeetAwasthiImg from './images/Abhijeet Awasthi.jpg';
import AkankshaSrivastavaImg from './images/Akanksha Srivastava.jpg';
import AkhileshChandakImg from './images/Akhilesh Chandak.jpg';
import AnantSharmaImg from './images/Anant Sharma.png';
import AnkitNihaniaImg from './images/Ankit Nihania.jpg';
import AnuragGargImg from './images/Anurag Garg.png';
import DevendraSinghImg from './images/Devendra Singh.jpg';
import HiraJaiswalImg from './images/Hira Jaiswal.png';
import KamalKumarImg from './images/Kamal Kumar.jpeg';
import NishantPandeyImg from './images/Nishant Pandey.jpg';
import PoojaRatudiImg from './images/Pooja Ratudi.jpg';
import PuneetAgarwalImg from './images/Puneet Agarwal.jpg';
import RajeshKumarRamImg from './images/Rajesh Kumar Ram.png';
import SarikaBhadauriaImg from './images/Sarika Bhadauria.jpg';
import ShivaniBaghelImg from './images/Shivani Baghel.jpg';
import ShivaniShrivastavImg from './images/Shivani Shrivastav.png';
import ShridharImg from './images/Shridhar.png';
import SnehaGhagImg from './images/Sneha Ghag.jpg';

interface TeamMember {
    name: string;
    role: string;
    linkedinUrl?: string;
    imageUrl?: string;
}

const OurTeam: React.FC = () => {
    const teamMembers: TeamMember[] = [
        {
            name: 'Anurag Garg',
            role: 'Founder & Chief Executive Officer',
            linkedinUrl: 'https://www.linkedin.com/in/anuraggarg3/',
            imageUrl: AnuragGargImg,
        },
        {
            name: 'Sridhar Srinivasan',
            role: 'Co-Founder & CTO',
            linkedinUrl: 'https://www.linkedin.com/in/sridhar-srinivasan/',
            imageUrl: ShridharImg,
        },
        {
            name: 'Dr Hira Jaiswal',
            role: 'Principal Officer & General Manager- Insurance',
            linkedinUrl: 'https://www.linkedin.com/in/dr-hira-jaiswal/',
            imageUrl: HiraJaiswalImg,
        },
        {
            name: 'Rajesh Kumar Ram',
            role: 'VP - Engineering - Technology',
            linkedinUrl: 'https://www.linkedin.com/in/rajesh-kumar-ram/',
            imageUrl: RajeshKumarRamImg,
        },
        {
            name: 'Anant Sharma',
            role: 'Business Head - Product & Research',
            linkedinUrl: 'https://www.linkedin.com/in/anant-sharma-nivesh/',
            imageUrl: AnantSharmaImg,
        },
        {
            name: 'Sarika Bhadauria',
            role: 'Manager - HR & Admin',
            linkedinUrl: 'https://www.linkedin.com/in/sarika-bhadauria/',
            imageUrl: SarikaBhadauriaImg,
        },
        {
            name: 'Kamal Kumar',
            role: 'Company Secretary, Accounts and Legal',
            linkedinUrl: 'https://www.linkedin.com/in/kamal-kumar-nivesh/',
            imageUrl: KamalKumarImg,
        },
        {
            name: 'Puneet Agarwal',
            role: 'Manager - Partner Relations',
            linkedinUrl: 'https://www.linkedin.com/in/puneet-agarwal-nivesh/',
            imageUrl: PuneetAgarwalImg,
        },
        {
            name: 'Ankit Nihania',
            role: 'Senior Area Manager - Partner Relations',
            linkedinUrl: 'https://www.linkedin.com/in/ankit-nihania/',
            imageUrl: AnkitNihaniaImg,
        },
        {
            name: 'Devendra Singh',
            role: 'Senior Area Manager - Partner Relations',
            linkedinUrl: 'https://www.linkedin.com/in/devendra-singh-nivesh/',
            imageUrl: DevendraSinghImg,
        },
        {
            name: 'Akanksha Srivastava',
            role: 'Product Manager - Technology',
            linkedinUrl: 'https://www.linkedin.com/in/akanksha-srivastava-nivesh/',
            imageUrl: AkankshaSrivastavaImg,
        },
        {
            name: 'Abhijeet Awasthi',
            role: 'Technical Architect - Technology',
            linkedinUrl: 'https://www.linkedin.com/in/abhijeet-awasthi-nivesh/',
            imageUrl: AbhijeetAwasthiImg,
        },
        {
            name: 'Pooja Ratudi',
            role: 'Manager - Partner Support',
            linkedinUrl: 'https://www.linkedin.com/in/pooja-ratudi/',
            imageUrl: PoojaRatudiImg,
        },
        {
            name: 'Sneha Ghag',
            role: 'Lead Engineer - Technology',
            linkedinUrl: 'https://www.linkedin.com/in/sneha-ghag/',
            imageUrl: SnehaGhagImg,
        },
        {
            name: 'Shivani Shrivastav',
            role: 'Manager - Team Lead, Customer Success Manager',
            linkedinUrl: 'https://www.linkedin.com/in/shivani-shrivastav-nivesh/',
            imageUrl: ShivaniShrivastavImg,
        },
        {
            name: 'Akhilesh Chandak',
            role: 'Principal Software Engineer - Technology',
            linkedinUrl: 'https://www.linkedin.com/in/akhilesh-chandak/',
            imageUrl: AkhileshChandakImg,
        },
        {
            name: 'Shivani Baghel',
            role: 'Manager - Client Wealth',
            linkedinUrl: 'https://www.linkedin.com/in/shivani-baghel-nivesh/',
            imageUrl: ShivaniBaghelImg,
        },
        {
            name: 'Nishant Pandey',
            role: 'Senior Area Manager - Partner Relations',
            linkedinUrl: 'https://www.linkedin.com/in/nishant-pandey-nivesh/',
            imageUrl: NishantPandeyImg,
        },
    ];

    // Group team members into rows
    const groupIntoRows = (members: TeamMember[], colsPerRow: number) => {
        const rows: TeamMember[][] = [];
        for (let i = 0; i < members.length; i += colsPerRow) {
            rows.push(members.slice(i, i + colsPerRow));
        }
        return rows;
    };

    return (
        <section className="py-16 md:py-24 bg-black/90">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Amazing Team
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        Meet the talented individuals driving innovation and excellence at Nivesh
                    </p>
                </div>

                {/* Team Grid - Grouped by Rows */}
                <div className="space-y-4 md:space-y-6">
                    {(() => {
                        // Use xl:grid-cols-4 as the base for row grouping
                        const rows = groupIntoRows(teamMembers, 4);
                        return rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 border border-primary rounded-l-2xl rounded-r-2xl p-4 md:p-6 bg-white/10 backdrop-blur-sm"
                            >
                                {row.map((member, memberIndex) => (
                                    <div
                                        key={memberIndex}
                                        className="bg-white rounded-2xl p-6 flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                                    >
                            {/* Circular Headshot */}
                            <div className="mb-5 relative">
                                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#DC2626]/10 to-[#EF4444]/5 border-4 border-white shadow-lg flex items-center justify-center overflow-hidden group-hover:border-[#DC2626]/20 group-hover:shadow-xl transition-all duration-300 relative">
                                    {member.imageUrl ? (
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#DC2626] to-[#EF4444] flex items-center justify-center">
                                            <span className="text-3xl md:text-4xl font-bold text-white">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                    )}
                                </div>
                                {/* Decorative ring */}
                                <div className="absolute inset-0 rounded-full border-2 border-[#DC2626]/20 scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                            </div>

                            {/* Name */}
                            <h3 className="text-lg md:text-xl font-bold text-[#243062] mb-2 leading-tight">
                                {member.name}
                            </h3>

                            {/* Role */}
                            <p className="text-sm md:text-base text-gray-600 mb-4 min-h-[3rem] flex items-center justify-center leading-snug">
                                {member.role}
                            </p>

                            {/* LinkedIn Link */}
                            {member.linkedinUrl && (
                                <a
                                    href={member.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
                                    aria-label={`View ${member.name}'s LinkedIn profile`}
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                                    )}
                                    </div>
                                ))}
                            </div>
                        ));
                    })()}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;

