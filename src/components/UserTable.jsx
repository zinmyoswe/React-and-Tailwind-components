export default function UserTable() {
  const users = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "John", last: "Doe", handle: "@social" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">#</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">First</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Last</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Handle</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{user.id}</td>
              <td className="px-4 py-2 border-b">{user.first}</td>
              <td className="px-4 py-2 border-b">{user.last}</td>
              <td className="px-4 py-2 border-b">{user.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
