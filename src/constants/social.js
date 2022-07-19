import LINKEDIN from '../assets/linkedin-icon.png';
import YOUTUBE from '../assets/youtube-icon.png';
import FACEBOOK from '../assets/facebook-icon.png';
import INSTAGRAM from '../assets/insta-icon.png';
import TWITTER from '../assets/twitter-icon.png';

export const SOCIAL = {
    SOCIAL: 'social',
    LINKEDIN: 'linkedin',
    YOUTUBE: 'youtube',
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram',
    TWITTER: 'twitter'
}

export const SocialList = [
    {
        key: SOCIAL.SOCIAL,
        item: 'Social'
    },
    {
        key: SOCIAL.LINKEDIN,
        item: <img src = {LINKEDIN} alt="linkedin icon"/>
    },
    {
        key: SOCIAL.YOUTUBE,
        item: <img src = {YOUTUBE} alt="youtube icon"/>
    },
    {
        key: SOCIAL.FACEBOOK,
        item: <img src = {FACEBOOK} alt="facebook icon"/>
    },
    {
        key: SOCIAL.INSTAGRAM,
        item: <img src = {INSTAGRAM} alt="instagram icon"/>
    },
    {
        key: SOCIAL.TWITTER,
        item: <img src = {TWITTER} alt="twitter icon"/>
    },
]