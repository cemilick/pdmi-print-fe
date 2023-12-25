
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Documents } from "./Documents";
import QRCode from "react-qr-code";
import { color } from "../utils/constant";
import { useMediaQuery } from "react-responsive";
import { Button, Form } from "react-bootstrap";

export const Home = () => {

    const { control, setValue, watch } = useForm();
    const [isShow, setIsShow] = useState(false);
    const [data, setData] = useState<any>();
    useEffect(() => {
        console.log(watch("name"), watch("address"), watch("number"));
    }, [watch()])

    const generatePDF = () => {
        try {
            setIsShow(true);
            setData({
                name: watch("name"),
                university: watch("university"),
            });
        } catch (error) {

        }
    }


    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const renderForm = () => (
        <Form className="w-100" style={{ minWidth: '14vw' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nama Lengkap:</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Masukkan Nama Anda"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3 w-100" controlId="formBasicPassword">
                <Form.Label>Universitas:</Form.Label>
                <Form.Control
                    name="university"
                    type="text"
                    placeholder="Masukkan Universitas Anda"
                    onChange={(e) => setValue(e.target.name, e.target.value)}
                />
            </Form.Group>
            <Button style={{ backgroundColor: color.primary }} onClick={generatePDF}>
                Submit
            </Button>
        </Form>
    )

    return (
        <div className="p-6 m-2 bg-white" style={
            (isMobile || isPortrait) ? { display: 'block', textAlign: 'center', alignContent: 'center', alignSelf: 'center' } :
                { display: 'flex', flexDirection: 'row', alignItems: 'center' }
        }>
            {
                (isMobile || isPortrait) ? (
                    <center style={{ marginBottom: 10 }}> {renderForm()} </center>
                ) : (<div style={{ marginRight: 50 }}>{renderForm()}</div>)
            }
            {
                isShow && (
                    <Documents width={(isMobile || isPortrait) ? '95vw' : '80vw'} name={data?.name} university={data?.university} />
                )
            }

        </div>
    )
}
