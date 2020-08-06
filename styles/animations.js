import { useSpring, config } from 'react-spring'

export const useFadeIn = () =>
    useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(200px)',
            opacity: 0
        }
    })
