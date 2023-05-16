import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempered Strength | Forged in Resilience</title>
        <meta
          name="description"
          content="Welcome to Tempered Strength, the ultimate fitness destination offering honest reviews, engaging content, and innovative workout programs to enhance your strength, endurance, and overall well-being. Join us on this transformative journey to achieve your fitness goals and unlock your true potential."
        />
        <meta
          name="keywords"
          content="fitness resource, boost strength, enhance endurance, honest reviews, engaging content, workout programs, transformative journey, achieve fitness goals, unlock true potential"
        />
      </Head>
      <main>
        <div className="flex items-center h-[50vh] justify-center bg-slate-900 text-white text-center overflow-hidden relative">
          <div className="relative z-10">
            <h1 className="font-bold text-3xl md:text-5xl">
              TEMPERED STRENGTH
            </h1>
            <p className="inline-block md:text-lg pt-2 pl-6 pr-6 mt-2 md:pt-3 md:pl-8 md:pr-8 md:mt-4 border-t">
              Forged in Resilience
            </p>
          </div>
          <Image
            className="object-cover h-full w-full absolute w-full z-0 opacity-40"
            alt="Eleiko calibrated plates"
            src="/images/eleiko.png"
            width={1000}
            height={500}
            quality={75}
          />
        </div>
        <div className="py-12 px-6 container space-y-[1.25rem] lg:py-16 lg:text-md md:px-4">
          <h2 className="text-xl font-bold md:text-2xl lg:text-4xl">
            Coming Soon
          </h2>

          <p>
            Welcome to the extraordinary world of Tempered Strength, your
            ultimate destination for all things fitness. Are you ready to embark
            on a transformative journey that will reshape your body, strengthen
            your mind, and unleash your true potential? Look no further because
            we are here to guide you every step of the way.
          </p>

          <p>
            At Tempered Strength, we understand that fitness is not just about
            looking good; it&apos;s about embracing a lifestyle that enhances
            your strength, endurance, and overall well-being. Whether
            you&apos;re a seasoned athlete seeking to break personal records, a
            beginner wanting to kickstart your fitness journey, or someone
            simply looking for a change of pace, we&apos;ve got you covered.
          </p>

          <p>
            Our platform is more than just a source of information; it&apos;s a
            community forged in resilience, dedicated to your success. We pride
            ourselves on providing honest, no-nonsense reviews that cut through
            the noise of the fitness industry. Say goodbye to empty promises and
            misleading information! With Tempered Strength, you can trust that
            our reviews and content are designed to propel you to new heights.
          </p>

          <p>
            But that&apos;s not all - we&apos;re about to take things to the
            next level! As we prepare to launch our website, we&apos;re working
            tirelessly to curate the latest articles, cutting-edge workouts,
            expert tips, and inspiring success stories. From innovative training
            programs to nutrition guidance, we&apos;ve got the tools you need to
            sculpt your body, supercharge your performance, and optimize your
            health.
          </p>

          <p>
            Make sure you don&apos;t miss out on any of the action. Stay in the
            loop by following us on Twitter{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://twitter.com/theliftingdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              @theliftingdev
            </a>
            , where we&apos;ll be sharing regular updates, sneak peeks, and
            exclusive behind-the-scenes content. Trust us, you won&apos;t want
            to miss what&apos;s coming your way.
          </p>

          <p>
            Get ready to forge your path to greatness with Tempered Strength -
            Forged in Resilience. We can&apos;t wait to be part of your fitness
            journey and witness the incredible transformations you&apos;ll
            achieve. Buckle up, because this is just the beginning of an
            exhilarating adventure that will push your limits and redefine what
            you thought was possible.
          </p>

          <p>
            Are you ready to unleash the fire within? Stay tuned, because
            something extraordinary is about to be ignited. Tempered Strength is
            coming, and it&apos;s going to change the game forever.
          </p>
        </div>
      </main>
    </>
  );
}
