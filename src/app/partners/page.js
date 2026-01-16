"use client";
import Image from "next/image";

const partners = [
	{
		name: "Microtech Infoserve",
		logo: "/images/microtech_logo.webp",
		site: "https://www.microtechinfy.co.in/",
	},
	{
		name: "Training Basket",
		logo: "/images/training_basket_logo.png",
		site: "https://www.trainingbasket.in/",
	},
	{
		name: "Redington",
		logo: "/images/redington_logo.svg",
		site: "https://redingtongroup.com/",
	},
	{
		name: "Ace Cloud Hosting",
		logo: "/images/ace_logo.svg",
		site: "https://www.acecloudhosting.com/",
	},
	{
		name: "Netsoft",
		logo: "/images/netsoft_logo.jpg",
		site: "https://netsoftit.com/",
	},
];

export default function PartnersSection() {
	return (
		<section className="bg-gray-50 text-purple-900 py-16 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-10">
					<h2 className="bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent text-4xl font-bold mb-4">
						Our Alliance Partners
					</h2>
					<p className="text-lg max-w-2xl mx-auto text-gray-700">
						Strategic collaborations with trusted technology leaders, enabling us to deliver end-to-end solutions with confidence.
					</p>
				</div>

				<div className="overflow-hidden rounded-2xl border border-purple-100 bg-white shadow-md">
					<div className="flex items-stretch gap-6 animate-partner-scroll px-6 py-8">
						{[...partners, ...partners].map((partner, idx) => (
							<a
								key={`${partner.name}-${idx}`}
								href={partner.site}
								target="_blank"
								rel="noreferrer"
								className="group min-w-[180px] md:min-w-[220px] lg:min-w-[240px]"
							>
								<div className="h-full bg-purple-50/60 border border-purple-100 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm group-hover:shadow-lg transition-all">
									<div className="h-20 w-full flex items-center justify-center mb-3">
										<img
											src={partner.logo}
											alt={`${partner.name} logo`}
											className="max-h-16 max-w-full object-contain drop-shadow-sm"
											loading="lazy"
										/>
									</div>
									<div className="font-semibold text-purple-900 group-hover:text-blue-900 transition-colors">{partner.name}</div>
								</div>
							</a>
						))}
					</div>
				</div>
			</div>

			<style jsx>{`
				@keyframes partner-scroll {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-partner-scroll {
					width: max-content;
					animation: partner-scroll 28s linear infinite;
				}

				.animate-partner-scroll:hover {
					animation-play-state: paused;
				}

				@media (max-width: 640px) {
					.animate-partner-scroll {
						animation-duration: 20s;
					}
				}
			`}</style>
		</section>
	);
}
