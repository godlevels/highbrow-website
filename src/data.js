// import images
import Logo from '../src/img/header/logo.svg';
import IconFirst from '../src/img/gallery/choose 1.png';
import IconSecond from '../src/img/gallery/choose 2.png';
import IconThird from '../src/img/gallery/choose 3.png';
import IconFourth from '../src/img/gallery/choose 4.png';
import ChooseLine from '../src/img/gallery/choose20.png';
import InstaIcon from '../src/img/footer/inst.png'
import FaceIcon from '../src/img/footer/faz.png'
import TwitterIcon from '../src/img/footer/twe.png'
import serviceOne from '../src/img/service/one.png'
import serviceTwo from '../src/img/service/two.png'
import serviceThree from '../src/img/service/three.png'
import serviceFour from '../src/img/service/four.png'
import serviceFive from '../src/img/service/five.png'
import serviceSix from '../src/img/service/six.png'
import serviceSeven from '../src/img/service/seven.png'
import serviceEight from '../src/img/service/eight.png'
import imageT from '../src/img/whychoose/whyline.png'
import imageL from '../src/img/whychoose/cube.png'
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'About' },
    { href: '/', name: 'Gallery' },
    { href: '/', name: 'Interview' },
    { href: '/', name: 'Articles' },
    { href: '/', name: 'Contact' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const WhyChooseData = [
  {
    id: '1',
    iconW: imageT,
    iconC: imageL,
    title: 'International Law',
    subtitle: 'A key strength of our international practice is our independence. We have a close relationship with a comprehensive network of preferred law firms around the world.',
  },

  {
    id: '2',
    iconW: imageT,
    iconC: imageL,
    title: 'All types of paper writing',
    subtitle: 'Whether you need an essay, research paper, or dissertation, our professional writers can create any kind of academic writing. Also, we can rewrite and edit your papers.',
  },

  {
    id: '3',
    iconW: imageT,
    iconC: imageL,
    title: 'Original samples',
    subtitle: 'Your paper will consist of 100% non-plagiarized content. We will consider your paper requirements, conduct research, and create the document especially for you.',
  },

  {
    id: '4',
    iconW: imageT,
    iconC: imageL,
    title: 'Frequent update on your research',
    subtitle: 'Stay in touch with the writer and get updates online on the working process and progress from start to finish with no stress.',
  },

  {
    id: '5',
    iconW: imageT,
    iconC: imageL,
    title: 'Prompt Delivery',
    subtitle: 'We work with your time frame to ensure prompt delivery of your research.',
  },

  {
    id: '6',
    iconW: imageT,
    iconC: imageL,
    title: 'Everything Gets Done',
    subtitle: 'A key strength of our international practice is our independence. We have a close relationship with a comprehensive network of preferred law firms around the world.',
  },
]

export const chooseData = [
  {
    id: '1',
    icon1: IconFirst,
    side: ChooseLine,
    title: 'Professional Team',
    subtitle: 'When you have no idea what to do with your written assignments, you don’t need to worry about the deadlines, grades, or absence of ideas.'
  },
  {
    id: '2',
    icon1: IconSecond,
    side: ChooseLine,
    title: 'Quick Delivery',
    subtitle: 'Our writers and consultants work round the clock to ensure the timely delivery of projects and tasks so that clients can have enough time to review before the deadline and submission.'
  },
  {
    id: '3',
    icon1: IconThird,
    side: ChooseLine,
    title: 'Great Pricing',
    subtitle: 'Our prices are pocket friendly and affordable. Anybody can easily purchase our services because of such low pricing with quality delivery assured.'
  },
  {
    id: '4',
    icon1: IconFourth,
    side: ChooseLine,
    title: 'Consultation/Advice',
    subtitle: 'Our consultants can offer advice and guidance on research projects, Admission and study Abroad visa processing. You can book a session today to gain clarity and get the needed support.'
  },
]

export const serviceData = [
  {
    id: '1',
    servImg: serviceOne,
    title: 'Business Plan, Profile, and Proposals',
    desc: 'Take your business to the next level by building compelling business plans, profiles and proposals.',
    btn: 'Learn More',
  },
  {
    id: '2',
    servImg: serviceTwo,
    title: 'Personal Statement',
    desc: 'Stand a higher chance to gain that admission or scholarship with our Personal Statement.',
    btn: 'Learn More',
  },
  {
    id: '3',
    servImg: serviceThree,
    title: 'Study Abroad',
    desc: 'Contact educational consultants to guide and help process your study visa application glitch-free.',
    btn: 'Learn More',
  },
  {
    id: '4',
    servImg: serviceFour,
    title: 'CV and Cover Letter Writing',
    desc: 'Secure your dream job with a neatly written CV and cover Letter.',
    btn: 'Learn More',
  },
  {
    id: '5',
    servImg: serviceFive,
    title: 'Assignments and Projects',
    desc: 'Stand a higher chance to secure a PhD opening with our neatly written PhD Proposals.',
    btn: 'Learn More',
  },
  {
    id: '6',
    servImg: serviceSix,
    title: 'PhD Proposal',
    desc: 'Secure your grades with us and embark on your path to academic excellence.',
    btn: 'Learn More',
  },
  {
    id: '7',
    servImg: serviceSeven,
    title: 'Plagiarism Checks and Removal',
    desc: 'Get the best Proofreaders and Editors at your service. Prune and Polish your papers with our help.',
    btn: 'Learn More',
  },
  {
    id: '8',
    servImg: serviceEight,
    title: 'LinkedIn Optimizatiom',
    desc: 'Make your profile stand out to colleagues and recruiters on the platform.',
    btn: 'Learn More',
  },
]

export const aboutData = {
  title: 'Highbrow Research: your one stop for professional writing services.',
  subtitle:
    'Highbrow Research is Africa’s leading educational institute that provides consultancy and professional writing services. With over seven years of delivering quality work to our clients worldwide, we are committed to serving our client’s needs and delivering beyong their expectations.',
  btnText: 'rearn more',
  btnIcon: <IoMdArrowForward />,
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
    name: 'Jack Geoffrey',
    occupation: 'Tattoo Artist',
  },
  {
    quoteImg: QuoteImg,
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
    name: 'Douglas Hane',
    occupation: 'Tattoo Artist',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'LA office',
      subtitle:
        'In velit arcu posuere integer sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 Norman Street, Los Angeles',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    },
    {
      title: 'NYC office',
      subtitle:
        'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '1630 Elm Drive, New York City',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+49 34 36573355',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@yourcompany.com',
      },
      link: 'Get location',
    }, 
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  footadd: {
      title: 'Talk to us',
      number: '+234 701 280 7297',
      address: '43b Emina Crescent, Allen Ikeja, Lagos Nigeria',
      insta: InstaIcon,
      face: FaceIcon,
      twit: TwitterIcon,
  },
  linksovers: {
    title: 'Overview',
    items: [
      { href: '/', name: 'Company' },
      { href: '/', name: 'Services' },
      { href: '/', name: 'Testimonials' },
      { href: '/', name: 'Pricing' },
    ],
  },
  linkssupp: {
    title: 'Support',
    items: [
      { href: '/', name: 'FAQs' },
      { href: '/', name: 'Help Center' },
      { href: '/', name: 'Consultant' },
    ],
  },
  linksleg: {
    title: 'Legal',
    items: [
      { href: '/', name: 'Terms & Conditions' },
      { href: '/', name: 'Privacy & Policy' },
      { href: '/', name: 'Contact' },
    ],
  },

  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
