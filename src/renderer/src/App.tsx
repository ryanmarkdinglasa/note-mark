import { ActionButtonsRow, Content, DraggableTopBar, RootLayout, SideBar } from '@/components'

const App = () => {
  return (
    <>
    <DraggableTopBar></DraggableTopBar>
      <RootLayout>
        <SideBar className="p-2"> 
          <ActionButtonsRow className='flex justify-between mt-1' />
        </SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20"> Content </Content>
      </RootLayout>
    </>
  )
}

export default App
