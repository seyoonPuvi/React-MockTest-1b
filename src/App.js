import {Component} from 'react'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
  height: 100vh;
  background-color: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  background-color: white;
  padding: 2rem 2rem;
  border-radius: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

const Heading = styled.h1`
  font-size: 2rem;
  color: darkblue;
`

const InputTextContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`

const Input = styled.input`
  border: 1px solid grey;
  color: darkblue;
  padding: 0.5rem 0;
  font-size: 2rem;
  width: 80%;
`

const Button = styled.button`
  padding: 1rem 1rem;
  background-color: pink;
  color: darkblue;
`

const Paragraph = styled.p`
  font-size: 1.5rem;
  color: darkblue;
  width: 80%;
`

// Replace your code here
class App extends Component {
  state = {inputValue: '', showText: false, showInput: true}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickSaveAndEditBtn = () => {
    this.setState(prevState => ({
      showText: !prevState.showText,
      showInput: !prevState.showInput,
    }))
  }

  render() {
    const {inputValue, showText, showInput} = this.state

    return (
      <Container>
        <MainContainer>
          <Heading>Editable Text Input</Heading>
          {showInput && (
            <InputTextContainer>
              <Input
                type="text"
                value={inputValue}
                onChange={this.onChangeInput}
              />
              <Button type="button" onClick={this.onClickSaveAndEditBtn}>
                Save
              </Button>
            </InputTextContainer>
          )}
          {showText && (
            <InputTextContainer>
              <Paragraph>{inputValue}</Paragraph>
              <Button type="button" onClick={this.onClickSaveAndEditBtn}>
                Edit
              </Button>
            </InputTextContainer>
          )}
        </MainContainer>
      </Container>
    )
  }
}

export default App
