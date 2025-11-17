export function successResponse(message, data = []) {
  return { success: true, message, data };
}

export function errorResponse(message) {
  return { success: false, message };
}
