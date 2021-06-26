// import { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Container as Div, PageInfo } from 'styles/Theme'

// const Form = styled(animated.form)`
//     display: block;
//     width: 100%;
//     position: relative;
//     margin-bottom: 50px;
// `
// const Fieldset = styled.fieldset`
//     padding: 12px 18px;
//     margin: 0px 0px 40px;
//     color: ${({ theme: { colors } }) => colors.primary};
//     border: 1px solid ${({ theme: { colors } }) => colors.primary};
//     legend {
//         padding: 0px 12px;
//     }
//     input {
//         width: 100%;
//         line-height: 2em;
//         background-color: transparent;
//         border: none;
//         color: ${({ theme: { colors } }) => colors.primary};
//         &:focus {
//             outline: none;
//         }
//     }
//     textarea {
//         width: 100%;
//         line-height: 2em;
//         background-color: transparent;
//         border: none;
//         color: ${({ theme: { colors } }) => colors.primary};
//         &:focus {
//             outline: none;
//         }
//     }
// `
// const Submit = styled.button`
//     cursor: pointer;
//     display: block;
//     margin: 0 0 0 auto;
//     line-height: 3em;
//     padding: 0px 66px;
//     color: ${({ theme: { colors } }) => colors.primary};
//     background-color: ${({ theme: { colors } }) => colors.highlight};
//     border: none;
//     font-size: 1.2em;
//     &:hover {
//         background-color: rgb(36, 170, 213);
//     }
// `
// const FromResponse = styled(animated.div)`
//     text-align: justify;
//     font-weight: 1.2em;
//     line-height: 2em;
// `

const Contact = props => {
    // const pageSpring = useFadeIn()

    // const [state, handleSubmit] = useForm('contactForm')

    // //* useState : sendingState
    // const [sendingState, setSending] = useState(false)
    // useEffect(() => {
    //     if (state.succeeded && !sendingState && state.submitting) {
    //         setSending(true)
    //     }
    //     if (state.succeeded && !state.submitting) {
    //         setTimeout(() => {
    //             setSending(false)
    //         }, 5000)
    //     }
    // }, [state])

    // //* useTransition : sendTransition
    // const sendTransition = useTransition(sendingState, item => item, {
    //     from: { transform: 'translateX(0%)', opacity: 0 },
    //     enter: { transform: 'translateX(0%)', opacity: 1 },
    //     leave: { transform: 'translateX(50%)', opacity: 0, position: 'absolute' }
    // })

    return (
        <>
            <NextSeo
                title="Contact | Nicolas Canon - Web developer"
                description="You can reach me by completing the form. I'll try my best to reply as soon as possible."
                canonical={`https://${process.env.DOMAIN}/contact`}
            />
            <Section>
                <Container>
                    <PageInfo>
                        <h1 className="page-name">{props.Page}</h1>
                        <p>Leave a message and say hello!</p>
                    </PageInfo>
                    <FormContainer>
                        {/* {sendTransition.map(({ item, props, key }) =>
                            item ? (
                                <FromResponse style={props} key={key}>
                                    {
                                        "Thanks for reaching me ! I'll try my best to reply as soon as possible. "
                                    }
                                </FromResponse>
                            ) : (
                                <Form
                                    id="contactForm"
                                    style={props}
                                    key={key}
                                    onSubmit={handleSubmit}
                                >
                                    <Fieldset>
                                        <legend>Your name</legend>
                                        <label hidden htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            required
                                            form="contactForm"
                                            id="name"
                                            name="name"
                                            type="text"
                                            aria-label="contact-name"
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <legend>Your email</legend>
                                        <label hidden htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            required
                                            form="contactForm"
                                            id="email"
                                            name="email"
                                            type="email"
                                            aria-label="contact-email"
                                        />
                                    </Fieldset>
                                    <Fieldset>
                                        <legend>Message</legend>
                                        <label hidden htmlFor="textarea">
                                            Textarea
                                        </label>
                                        <textarea
                                            required
                                            form="contactForm"
                                            id="textarea"
                                            name="textarea"
                                            aria-label="contact-textarea"
                                        />
                                    </Fieldset>
                                    <Submit type="submit" disabled={state.submitting}>
                                        Send
                                    </Submit>
                                </Form>
                            )
                        )} */}
                    </FormContainer>
                </Container>
            </Section>
        </>
    )
}

const Section = styled.section`
    margin: 0px auto;
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        width: 84%;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        width: 78%;
    }
    @media (${({ theme }) => theme.mediaQueries.laptop}) {
        width: 66%;
    }
`
const Container = styled(Div)`
    @media (${({ theme }) => theme.mediaQueries.mobileS}) {
        display: flex;
        flex-direction: column;
    }
    @media (${({ theme }) => theme.mediaQueries.tablet}) {
        display: grid;
        grid-template-columns: 50% auto;
        grid-column-gap: 10px;
    }
`
const FormContainer = styled.div`
    position: relative;
`

//! Default Props
Contact.defaultProps = {
    Page: 'Contact',
    pageDescription:
        'Hi. Send me a message here ! I will try to respond as soon as possible.'
}
Contact.propTypes = {
    Page: PropTypes.string,
    pageDescription: PropTypes.string
}

export default Contact
