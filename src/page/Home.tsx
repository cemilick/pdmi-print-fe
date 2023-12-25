import { Button, Input, ReactHookWrapper } from "alurkerja-ui";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { Documents } from "./Documents";
import QRCode from "react-qr-code";
import { color } from "../utils/constant";

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


    return (
        <div className="p-6 m-2 bg-white" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: 50 }}>
                <ReactHookWrapper control={control} labelSize="lg" inline>
                    <Input
                        aria-label="Masukkan nama Anda"
                        name="name"
                        onChange={(e) => setValue(e.target.name, e.target.value)}
                    />
                    <Input
                        aria-label="Masukkan Universitas Anda"
                        name="university"
                        onChange={(e) => setValue(e.target.name, e.target.value)}
                    />
                    <Button
                        type="submit"
                        className="btn btn-primary"
                        onClick={generatePDF}
                    >
                        Submit
                    </Button>
                </ReactHookWrapper>
            </div>
            {
                isShow && (
                    <Documents name={data?.name} university={data?.university} />
                )
            }

        </div>
    )
}
