const Footer: React.FC = () => {
  return (
    <section className=" bg-gray-100 flex items-center text-sm justify-center">
      <div className="w-full flex p-8">
        <div className="w-1/2">
          <div className="pb-4">
            <h4>About</h4>
            <h4>Instagram</h4>
            <h4>Facebook</h4>
          </div>
          <div className="pb-4">
            <h4>Terms</h4>
            <h4>Careers</h4>
            <h4>Terms of Service</h4>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center ">
          <h4 className="pb-4">Store Location & Hours:</h4>
          <h4 className="pb-4">1192 South Carolina, USA</h4>
          <h4 className="pb-4">Monday to Friday 9:30am - 5:00pm</h4>
          <h4 className="pb-4">Sunday 9:30am - 3:00pm</h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
