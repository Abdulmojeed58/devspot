const Progress = ({ match }: { match: number }) => {
  return (
    <div className="mb-2 flex gap-2 items-center">
      <div>
        <span className="text-white text-sm font-semibold leading-6 font-roboto">{match}% MATCH</span>
      </div>
      <div className="bg-[#424248] rounded-full h-4 flex-1">
        <div
          className="bg-color-gradient-purple-blue h-4 rounded-full transition-all duration-300"
          style={{ width: `${match}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
