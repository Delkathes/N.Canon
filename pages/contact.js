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
    color: rgb(251, 251, 251);
    border: 1px solid rgb(251, 251, 251);
    input {
        width: 100%;
        line-height: 2em;
        background-color: transparent;
        border: none;
        color: rgb(251, 251, 251);
        &:focus {
            outline: none;
        }
    }
    textarea {
        width: 100%;
        line-height: 2em;
        background-color: transparent;
        border: none;
        color: rgb(251, 251, 251);
        &:focus {
            outline: none;
        }
    }
`
const Label = styled.legend`
    padding: 0px 12px;
`
const Submit = styled.button`
    position: absolute;
    right: 0px;
    line-height: 3em;
    padding: 0px 66px;
    color: rgb(251, 251, 251);
    background-color: rgb(26, 160, 203);
    border: none;
    font-size: 1.2em;
    cursor: pointer;
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
                <Form>
                    <Input>
                        <Label>
                            Your name
                        </Label>
                        <input type="text" name="name" />
                    </Input>
                    <Input>
                        <Label>
                            Your email
                        </Label>
                        <input type="email" name="email" />
                    </Input>
                    <Input>
                        <Label>
                            Message
                        </Label>
                        <textarea  />
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