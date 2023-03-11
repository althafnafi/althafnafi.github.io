const SectionContent = ({ data }) => {
  const { id, title, content } = data;

  return (
    <section className="font-mono text-white py-2 text-xl md:text-2xl">
      <h2 id={id} className="font-bold">
        <span className="text-teal-400">{title}</span>
      </h2>
      <p className="text-sm pl-2.5 pb-2 lg:w-1/2">{content}</p>
    </section>
  );
};

export default SectionContent;
