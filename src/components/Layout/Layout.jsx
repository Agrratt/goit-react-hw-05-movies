import { Outlet } from "react-router-dom";
import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Layout/Layout.styled';

export default function Layout() {
    return (
        <Container>
            <AppBar />
            <Outlet/>
        </Container>
    );
}