//? IMPORT
//! Modules
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {animated, useSpring, config} from 'react-spring'

//! Content
//! Constants
//! Utils
//! Helpers
//! Context
//! Hooks
//! Actions
//! Styles
const Section = styled(animated.section)`
    width: 66%;
    margin: 0px auto;
`
const Container = styled.div`
    width: 100%;
    margin-top: 30vh;
    display: grid;
    grid-template-columns: 50% auto;
    grid-column-gap: 10px;
`
const PageName = styled.div`
    font-weight: bold;
    font-size: 3em;
`
const Form = styled.form`
    display: block;
    width: 100%;
    position: relative;
`
const Input = styled.fieldset`
    padding: 12px 18px;
    margin: 0px 0px 40px;
    color: ${({theme: {colors}}) => colors.primary};
    border: 1px solid ${({theme: {colors}}) => colors.primary};
    legend {
        padding: 0px 12px;
    }
    input {
        width: 100%;
        line-height: 2em;
        background-color: transparent;
        border: none;
        color: ${({theme: {colors}}) => colors.primary};
        &:focus {
            outline: none;
        }
    }
    textarea {
        width: 100%;
        line-height: 2em;
        background-color: transparent;
        border: none;
        color: ${({theme: {colors}}) => colors.primary};
        &:focus {
            outline: none;
        }
    }
`
const Submit = styled.button`
    cursor: pointer;
    position: absolute;
    right: 0px;
    line-height: 3em;
    padding: 0px 66px;
    color: ${({theme: {colors}}) => colors.primary};
    background-color: ${({theme: {colors}}) => colors.highlight};
    border: none;
    font-size: 1.2em;
    &:hover {
        background-color: rgb(36, 170, 213);
    }
`
//! Components
//! High-order-components
//!  Page : Contact
//? EXPORT
const Contact = props => {
    const pageSpring = useSpring({
        config: config.default,
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        from: {
            transform: 'translateY(200px)',
            opacity: 0
        },
    })
    return (
        <Section style={pageSpring}>
            <Container>
                <div>
                    <PageName>{props.Page}</PageName>
                    <p>Leave a message and say hello!</p>
                </div>
                <Form id="contact-form">
                    <Input>
                        <legend>
                            Your name
                        </legend>
                        <label hidden htmlFor="name">Name</label>
                        <input required autoFocus type="text" name="name" aria-label="contact-name" form="contact-form"/>
                    </Input>
                    <Input>
                        <legend>
                            Your email
                        </legend>
                        <label hidden htmlFor="email">Email</label>
                        <input required type="email" name="email" aria-label="contact-email" form="contact-form"/>
                    </Input>
                    <Input >
                        <legend>
                            Message
                        </legend>
                        <label hidden htmlFor="textarea">Textarea</label>
                        <textarea required name="textarea" aria-label="contact-textarea" form="contact-form"/>
                    </Input>
                    <Submit name="Send" value="Send">Send</Submit>
                </Form>
            </Container>
        </Section>
    )
}

//! Default Props
Contact.defaultProps = {
    Page: 'Contact'
}
Contact.propTypes = {
    Page: PropTypes.string
}

export default Contact