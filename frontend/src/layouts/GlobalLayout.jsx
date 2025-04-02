function GlobalLayout ({ children }) {
  return (
    <>
      <header>Mon Header</header>
      <main>
        {children}
      </main>
      <footer>Mon footer</footer>
    </>
  )
}

export default GlobalLayout
