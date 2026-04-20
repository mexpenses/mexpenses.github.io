import { ReactElement, ReactNode } from "react";
import { Icon } from "@/components/Common/Icon";
import { BackgroundSymbol, Column, Row } from "./styles";

type ItemListProps = {
    icon: string;
    title: string;
    description: string;
    children?: ReactNode[] | ReactElement[] | null
}

export const ItemList = ({ icon, title, description, children }: ItemListProps) => {

    return (
        <Row style={{ gap: 10 }}>
            <BackgroundSymbol>
                <Icon name={icon} style={{ fontSize: 35, fontWeight: "bold", color: '#278bff' }} />
            </BackgroundSymbol>
            <div style={{ flex: 1, paddingRight: 10 }}>
                <Column style={{ gap: 15 }}>
                    <span style={{ fontWeight: 'bold', fontSize: 16 }}>
                        {title}
                    </span>
                    <span style={{ fontSize: 14 }}>
                        {description}
                    </span>
                    {children}
                </Column>
            </div>
        </Row>
    );
}