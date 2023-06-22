import './CreateUser.css';
import { useCallback, useEffect, useState } from 'react';
import axios from "axios";
import { Button, Container, Input } from '@chakra-ui/react';

const CreateUser = () => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const onChangeTitle = (event) => {
        const inputValue = event.target.value
        setTitle(inputValue);
    }

    const onChangeBody = (event) => {
        const inputValue = event.target.value
        setBody(inputValue);
    }

    const handleSubmit = async () => {
        try {
            const id = 1;
            const postToSubmit = {
                userId: 1,
                title: title,
                body: body
            }

            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/${id}`, postToSubmit)
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="container">

            <Container centerContent>

                <label for='title'> Titulo </label>

                {/* <input
                    id='title'
                    type='text'
                    onChange={onChangeTitle}
                    value={title}

                /> */}
                <Input
                    placeholder='Titulo'
                    onChange={onChangeTitle}
                    value={title} 
                />

                <TextArea
                placeholder='body'
                onChange={onChangeBody}
                value={body}
                />



                <label for='title'> Conteudo </label>

                <input
                    id='title'
                    type='text'
                    onChange={onChangeBody}
                    value={body}

                />
                <Button onClick={handleSubmit}> Criar Post</Button>
                <button onClick={(handleSubmit)}>Criar Post</button>
            </Container>

        </div>
    )
}

export default CreateUser;