import {Container} from '@nextui-org/react';
import SwitchThemeButton from '../../components/Button/SwitchThemeBtn';
import Introduction from './Introduction';
import ArtworkOverview from './ArtworkOverview';
import ShowAndMedia from './ShowAndMedia';

export default function Home() {
  return (
    <Container md className="relative">
      <SwitchThemeButton className="absolute -top-20 right-0"/>
      <div className="mt-[200px] mb-[120px]">
        <Introduction/>
        <ArtworkOverview/>
        <ShowAndMedia/>
      </div>
    </Container>
  )
}