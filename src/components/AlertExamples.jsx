export default function AlertExamples() {
  return (
    <div className="space-y-4 p-4">
      {/* Success Alert */}
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Your action was successful.</span>
      </div>

      {/* Error Alert */}
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> Something went wrong.</span>
      </div>

      {/* Warning Alert */}
      <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded" role="alert">
        <strong className="font-bold">Warning!</strong>
        <span className="block sm:inline"> Check the fields before submitting.</span>
      </div>

      {/* Info Alert */}
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded" role="alert">
        <strong className="font-bold">Info!</strong>
        <span className="block sm:inline"> This is some helpful information.</span>
      </div>

      {/* Gradient Info Alert */}
      <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-3 rounded shadow-md" role="alert">
        <strong className="font-bold">Info:</strong>
        <span className="block sm:inline"> New updates are available. Please check!</span>
      </div>

      {/* Gradient Success Alert */}
      <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-3 rounded shadow-md" role="alert">
        <strong className="font-bold">Success:</strong>
        <span className="block sm:inline"> Your changes have been saved successfully.</span>
      </div>

      {/* Gradient Warning Alert */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-3 rounded shadow-md" role="alert">
        <strong className="font-bold">Warning:</strong>
        <span className="block sm:inline"> Your subscription is about to expire.</span>
      </div>

      {/* Gradient Error Alert */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded shadow-md" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> Something went wrong. Please try again.</span>
      </div>
    </div>
  );
}
