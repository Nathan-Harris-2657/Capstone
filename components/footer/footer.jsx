function Footer(){
  const currentYear = new Date().getFullYear();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    return(
        <>
            <footer className="footer">
                <p>&copy; {currentYear} The Trailer Bible. All rights reserved.</p>
                <p>{currentDate}</p>
            </footer> 
        </>
    )
}

export default Footer

