function TeamMembers({ members }: any) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {members.map((member: any) => (
          <div
            key={member.id}
            className="rounded-2xl border border-gray-300 bg-white/5 p-5 backdrop-blur-sm text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-16 h-16 rounded-full mb-4 mx-auto"
            />

            <h4 className="mb-2 text-xl font-semibold text-black">
              {member.name}
            </h4>

            <p className="text-sm text-black">
              {member.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TeamMembers;